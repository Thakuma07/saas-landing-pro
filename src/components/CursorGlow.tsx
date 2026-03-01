"use client";
import { useEffect, useRef } from "react";

export const CursorGlow = () => {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = glowRef.current;
        if (!el) return;

        let raf: number;
        let mouseX = -200;
        let mouseY = -200;
        let currentX = -200;
        let currentY = -200;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            // Lerp for smooth follow
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;
            el.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`;
            raf = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMove);
        raf = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-[400px] h-[400px] rounded-full"
            style={{
                background:
                    "radial-gradient(circle, rgba(24,62,194,0.08) 0%, rgba(107,140,255,0.04) 50%, transparent 70%)",
                willChange: "transform",
            }}
        />
    );
};
