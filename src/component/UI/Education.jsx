import React from 'react'
import { Card } from 'react-bootstrap'
import EducationData from '../../assets/data.json'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const Education = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll(".edu-card").forEach((card) => {
            const isEven = card.classList.contains("even");
            gsap.from(card, {
                x: isEven ? 300 : -300,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                    markers: false, // Optional: turn on if needed
                }
            });
        });
    }, []);
    return (
        <section className='education-container' id='education' >
            <div className="education-wrapper">
                <h1 className='title'>My <span>Education</span></h1>
                <div className="edu-cards">
                    {EducationData?.education.map((edu, i) => {
                        const { id, date, education, description } = edu;
                        const isEven = i % 2 === 0;

                        return (<Card key={id} className={`edu-card ${isEven ? "even" : "odd"}`}>
                            <div className="edu-dot"></div>
                            <div className="date">{date}</div>
                            <Card.Body className="edu-content">
                                <Card.Title>{education}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                            </Card.Body>

                        </Card>)
                    })}
                </div>
            </div>
        </section >
    )
}

export default Education
