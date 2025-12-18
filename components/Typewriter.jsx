"use client";
import { useEffect, useState } from "react";

const Typewriter = ({
    words = [],
    typingSpeed = 120,
    deletingSpeed = 80,
    delayBetweenWords = 1500,
}) => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        let timeout;

        if (!isDeleting) {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));
            }, typingSpeed);

            if (text === currentWord) {
                timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
            }
        } else {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));
            }, deletingSpeed);

            if (text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => prev + 1);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return (
        <span className="text-[#0788ff] font-bold text-[70px] uppercase leading-[76px]">
            {text}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export default Typewriter;
