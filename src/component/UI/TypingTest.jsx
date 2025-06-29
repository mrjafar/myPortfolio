import { useEffect, useState } from "react";

const titles = [
    "Frontend Developer",
    "Web Developer",
    "ReactJS Developer",
    "Web Designer",
];

const TypingText = () => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullText = titles[index];
        const delay = isDeleting ? 50 : 150;

        const timer = setTimeout(() => {
            setDisplayText((prev) =>
                isDeleting
                    ? fullText.substring(0, prev.length - 1)
                    : fullText.substring(0, prev.length + 1)
            );

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % titles.length);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index]);

    return (
        <h2 className="typing-heading">
           and I'm a <span className="typing">{displayText}</span>
            <span className="cursor">|</span>
        </h2>
    );
};

export default TypingText;
