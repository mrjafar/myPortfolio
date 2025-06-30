import { Button } from "react-bootstrap";
import aboutImg from "../../assets/mainAbout.jpeg";
import viewMoreImg from '../../assets/newAbout.jpeg'
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TypingText from "./TypingTest";
import Modal from "react-modal";
import { GiCrossedBones } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const imgRef = useRef(null);

    useGSAP(() => {
        gsap.from(imgRef.current, {
            x: 800,
            y: 50,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            filter: "blur(10px)",
            scrollTrigger: {
                trigger: "#about",
                scroller: "body",
                start: "top 30%",
            },
        });
        document.querySelectorAll(".about-right h1, .about-right h2, .about-right p, .about-right .btn-read").forEach((el, i) => {
            gsap.from(el, {
                x: -800,
                opacity: 0,
                duration: 0.7,
                delay: i * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    scroller: "body",
                    toggleActions: "play none none none"
                }
            });
        });
    }, []);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    return (<>
        <h1 style={{ textAlign: "center" }}>About <span>Me</span></h1>
        <section className='about-container' id="about">
            <div className="about-left">
                <figure ref={imgRef}>
                    <img src={aboutImg} alt="about-me-img" />
                </figure>
            </div>
            <div className="about-right">
                <h1>I'm <span>Jafar Khan</span></h1>
                <TypingText />
                <p>
                    A Frontend Developer driven by turning ideas into fully functional, interactive
                    web applications. With a strong grasp of React.js, TypeScript, and modern styling
                    tools like SCSS and styled-components, I craft seamless user interfaces that don’t just look great—they work brilliantly.
                </p>
                <Button variant="none" className="btn-read" onClick={handleModalOpen}>Read More</Button>
                <Modal
                    isOpen={isModalOpen}
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    contentLabel="About Me Modal"
                >
                    <GiCrossedBones className="cross-icon" title="Go back" onClick={() => setIsModalOpen(false)} />
                    <figure ref={imgRef}>
                        <img src={viewMoreImg} alt="about-me-img" />
                        <figcaption>
                            <h3>About <span>Me</span></h3>
                            <p>
                                I'm a Frontend Developer with a passion for translating ambitious ideas into elegant, user-focused
                                web experiences. I specialize in React.js and TypeScript, buildingscalable and efficient components
                                with modern architecture in mind.
                            </p>
                            <p> My expertise in SCSS, styled-components, and other modern styling libraries allows me to craft responsive and accessible UI that feels as smooth
                                as it looks.💡 Beyond just writing code, I thrive on problem-solving, team collaboration, and staying
                                ahead of the curve with the latest frontend trends. Whether it’s optimizing performance, implementing
                                state management strategies, or working closely with designers to bring vision to life, I take pride
                                in delivering high-quality products that exceed user expectations.</p>
                            <ul>
                                🧩 Core Skills
                                <li>
                                    React.js / TypeScript / JavaScript (ES6+)
                                </li>
                                <li>
                                    SCSS / Styled-components / CSS-in-JS
                                </li>
                                <li>
                                    Responsive & Mobile-first Design
                                </li>
                                <li>
                                    Webpack / Vite / Git
                                </li>
                                <li>
                                    API Integration & RESTful archite- cture
                                </li>
                                <li>
                                    Performance Optimization & Debugging
                                </li>
                            </ul>
                        </figcaption>
                    </figure>
                </Modal>
            </div>
        </section>
    </>);
}

export default About;