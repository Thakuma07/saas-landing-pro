"use client";
import { useRef, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface RippleButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    whileHover?: object;
    whileTap?: object;
    transition?: object;
}

export const RippleButton = ({ children, className, onClick, type = "button", whileHover, whileTap, transition }: RippleButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const btn = ref.current;
        if (!btn) return;
        const { left, top, width, height } = btn.getBoundingClientRect();
        const size = Math.max(width, height) * 2;
        const x = e.clientX - left - size / 2;
        const y = e.clientY - top - size / 2;
        const ripple = document.createElement("span");
        ripple.style.cssText = `position:absolute;left:${x}px;top:${y}px;width:${size}px;height:${size}px;border-radius:50%;background:rgba(255,255,255,0.28);transform:scale(0);animation:rippleAnim 0.65s ease-out forwards;pointer-events:none;`;
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
        onClick?.();
    };

    return (
        <motion.button
            ref={ref}
            type={type}
            className={twMerge("relative overflow-hidden", className)}
            onClick={handleClick}
            whileHover={whileHover}
            whileTap={whileTap}
            transition={transition}
        >
            {children}
        </motion.button>
    );
};
