import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useState } from 'react'
import { Button, FormControl, Toast } from 'react-bootstrap'
import { toast } from 'react-toastify';
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    console.log(input);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!/^\d{10}$/.test(input.mobile)) {
            toast.error("Enter a valid 10-digit mobile number.");
            return;
        }

        const res = await fetch("https://formspree.io/f/xjkrenkg", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input)
        });
        if (res.ok) {
            toast.success("Message Sent! i will reach you soon.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark", // or "light" or custom
            });
            setInput({ name: "", email: "", mobile: "", message: "" })
        } else {
            toast.error("Something went wrong!, please try again later.")
        }
    }
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                scroller: "body",
                start: "top 60%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            }
        })

        tl.from("#contact h1", {
            y: -100,
            opacity: 0,
            duration: .7,
            ease: "bounce",
        })
        tl.from("#contact .contact .inputs .input input", {
            x: 800,
            opacity: 0,
            duration: .7,
            ease: "power4.inOut",
            stagger: .3,
        }, "anim")
        tl.from("#contact .contact .inputs textarea", {
            x: -800,
            opacity: 0,
            duration: .7,
            ease: "power4.inOut",
            stagger: .3,
        }, "anim")
        gsap.from("#contact .contact button", {
            y: 200,
            opacity: 0,
            duration: .7,
            ease: "power4.inOut",
            scrollTrigger: {
                trigger: "#contact",
                scroller: "body",
                start: "top 60%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            }
        })
    })
    return (
        <section className='contact-container' id='contact' >
            <h1>Drop me a <span>message!</span></h1>
            <form onSubmit={handleSubmit} className="contact">
                <div className="inputs">
                    <div className="input">
                        <FormControl
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            autoComplete="off"
                            value={input.name}
                            onChange={handleInputChange}
                            required
                        />
                        <FormControl
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            value={input.email}
                            onChange={handleInputChange}
                            required
                        />
                        <FormControl
                            type='tel'
                            name='mobile'
                            pattern='[0-9]{10}'
                            placeholder='Enter your mobile number'
                            autoComplete='off'
                            value={input.mobile}
                            onChange={handleInputChange}
                            required >
                        </FormControl>
                    </div>
                    <FormControl
                        as="textarea"
                        name="message"
                        placeholder="Message"
                        autoComplete="off"
                        value={input.message}
                        onChange={handleInputChange}
                        rows={7}
                    />
                </div>
                <Button variant='none' type='submit'>Send</Button>
            </form>
        </section>
    )
}

export default Contact
