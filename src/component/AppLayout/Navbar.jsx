import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../UI/Logo';

function Navigation() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const navLinks = useRef([]);
    const logoRef = useRef();

    useGSAP(() => {
        gsap.from(logoRef.current, {
            y: -400,
            opacity: 0,
            duration: 1,
        });
    }, []);

    useGSAP(() => {
        gsap.from(navLinks.current, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "none",
            delay: 0.2,
            stagger: 0.2,
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            expanded={collapse}
            className={`navbar-container ${scrolled ? "navbar-scrolled" : ""}`}
            fixed="top"
            id="navbar"
            onToggle={(next) => setCollapse(next)}
        >
            <Container>
                <div ref={logoRef} className="logo-container">
                    <Logo />
                </div>

                <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center text-center">
                    <Nav className="ms-auto">
                        {["Home", "About", "Education", "Skills", "Contact"].map((text, i) => {
                            const sectionId = text.toLowerCase();
                            return (
                                <Nav.Link
                                    key={i}
                                    href={`#${sectionId}`}
                                    onClick={() => {
                                        setActiveLink(sectionId);
                                        setCollapse(false); // collapse after click
                                    }}
                                    className={activeLink === sectionId ? "active" : ""}
                                    ref={(el) => (navLinks.current[i] = el)}
                                >
                                    {text}
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
