"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?#@$";

interface ScrambleTextProps {
    text: string;
    className?: string;
    duration?: number;
    delay?: number;
}

export const ScrambleText = ({ text, className = "", duration = 1000, delay = 0 }: ScrambleTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [display, setDisplay] = useState(text.replace(/\S/g, CHARS[0]));

    useEffect(() => {
        if (!isInView) return;
        const startTimeout = setTimeout(() => {
            const frames = Math.ceil(duration / 50);
            const nonSpaces = text.replace(/ /g, "").length;
            let frame = 0;
            const timer = setInterval(() => {
                frame++;
                const progress = frame / frames;
                setDisplay(
                    text.split("").map((char, i, arr) => {
                        if (char === " ") return " ";
                        const nsBefore = arr.slice(0, i).filter(c => c !== " ").length;
                        if (progress >= (nsBefore + 1) / nonSpaces) return char;
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    }).join("")
                );
                if (frame >= frames) { setDisplay(text); clearInterval(timer); }
            }, 50);
            return () => clearInterval(timer);
        }, delay);
        return () => clearTimeout(startTimeout);
    }, [isInView, text, duration, delay]);

    return <span ref={ref} className={className}>{display}</span>;
};
