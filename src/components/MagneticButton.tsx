"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface MagneticButtonProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    strength?: number; // How far the button physical moves
}

export const MagneticButton = ({ children, className, strength = 20, ...props }: MagneticButtonProps) => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const controlsBtn = useAnimation();
    const controlsText = useAnimation();

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        // Move button physically
        controlsBtn.start({
            x: (distanceX / width) * strength,
            y: (distanceY / height) * strength,
            transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.5 },
        });

        // Move text inside slightly further for parallax
        controlsText.start({
            x: (distanceX / width) * (strength * 0.5),
            y: (distanceY / height) * (strength * 0.5),
            transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.5 },
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        controlsBtn.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
        controlsText.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
    };

    return (
        <motion.div
            ref={buttonRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={controlsBtn}
            className={twMerge("relative max-w-max", className)}
            {...props}
        >
            <motion.div ref={textRef} animate={controlsText} className="flex items-center justify-center gap-2 pointer-events-none">
                {children}
            </motion.div>
        </motion.div>
    );
};
