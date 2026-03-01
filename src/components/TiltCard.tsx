"use client";
import { useRef, MouseEvent, ReactNode } from "react";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
}

export const TiltCard = ({ children, className = "", intensity = 8 }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const onMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        ref.current.style.transform = `perspective(900px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale3d(1.02,1.02,1.02)`;
    };

    const onLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    };

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={className}
            style={{ transition: "transform 0.15s ease-out", transformStyle: "preserve-3d", willChange: "transform" }}
        >
            {children}
        </div>
    );
};
