"use client";
import { useEffect } from "react";

export const SmoothScroll = () => {
    useEffect(() => {
        let lenis: import("lenis").default;

        const init = async () => {
            const Lenis = (await import("lenis")).default;
            lenis = new Lenis({
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                touchMultiplier: 2,
            });

            const raf = (time: number) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);
        };

        init();
        return () => lenis?.destroy();
    }, []);

    return null;
};
