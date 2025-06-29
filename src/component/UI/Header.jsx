import { Button, Container } from "react-bootstrap"
import { FaGithubAlt, FaLinkedin, FaUser, FaWhatsapp } from "react-icons/fa"
import { RiInstagramLine } from "react-icons/ri"
import myImg from "../../assets/hero_img.jpeg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import TypingText from "./TypingTest";

const Header = () => {
    const imgRef = useRef();
    const tl = gsap.timeline();
    useGSAP(() => {
        gsap.from(".grid-left h1, .grid-left h2, .grid-left p", {
            x: -500,
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut",
            stagger: 0.2
        });
        gsap.from(imgRef.current, {
            x: 300,
            opacity: 0,
            duration: .5,
            ease: "circ",
            overflow: "hidden"
        })
        gsap.set(".grid-left .icons-container a", { opacity: 0, x: -100 });
        tl.to(`.grid-left .icons-container a`, {
            x: 0,
            opacity: 1,
            rotateY: 720,
            duration: .4,
            ease: "none",
            stagger: .4
        })
            .from(".grid-left .btn-container", {
                x: 100,
                opacity: 0,
                ease: "power1",
                stagger: .2,
            })
    }, [])
    return (
        <section className="hero-section" id="home">
            <div className="grid-left">
                <h1>I'm <span>Jafar Khan</span></h1>
                {/* <h2>and I'm a <span></span></h2> */}
                <TypingText />

                <p>
                    A Frontend Developer driven by turning ideas into fully functional, interactive
                    web applications. With a strong grasp of React.js, TypeScript, and modern styling
                    tools like SCSS and styled-components, I craft seamless user interfaces that don’t just look great—they work brilliantly.
                </p>
                <div className="icons-container">
                    <a
                        href="https://www.linkedin.com/in/jafar-khan-845396331"
                        className="icon"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="linkedin" />
                    </a>
                    <a
                        href="https://www.instagram.com/jafar_jk0/"
                        target="_blank"
                        className="icon"
                    >
                        <RiInstagramLine className="insta" />
                    </a>
                    <a
                        href="https://wa.me/917347512300?text=Hi%20there!" target="_blank"
                        className="icon">
                        <FaWhatsapp className="whatsapp" />
                    </a>
                    <a
                        href="https://github.com/mrjafar"
                        className="icon"
                        target="_blank">
                        <FaGithubAlt />
                    </a>
                </div>
                <div className="btn-container">
                    <a href="https://www.linkedin.com/in/jafar-khan-845396331" target="_blank">
                        <Button variant="none">
                            Hire
                        </Button>
                    </a>
                    <Link to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70} // adjust for fixed headers
                        className="nav-link"
                    >
                        <Button variant="none">Contact</Button>
                    </Link>
                </div>
            </div>
            <div className="grid-right">
                <figure ref={imgRef} className="img-container">
                    <img src={myImg} alt="my-img" />
                </figure>
            </div>
        </section>
    )
}

export default Header;
