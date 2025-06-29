import { useGSAP } from "@gsap/react";
import skills from "../../assets/data.json"
import gsap from "gsap";
const Skills = () => {

    useGSAP(() => {
        gsap.from("#skills h1, ul li", {
            x: -300,
            opacity: 0,
            duration: 0.4,
            ease: "power3.out",
            stagger: .2,
            scrollTrigger: {
                trigger: "#skills",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            }
        })
    })
    return (
        <section className="skills-container" id="skills" >
            <h1>My <span>Skills</span></h1>
            <ul className="skills">
                {skills.skills.map((skill) => {
                    const { id, name, level } = skill;
                    return <li key={id}>
                        <h2>{name}</h2>
                        <input type="range" min="0" max="100" value={level} />
                        <span>{level}%</span>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default Skills
