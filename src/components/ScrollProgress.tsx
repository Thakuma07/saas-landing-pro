"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden
            style={{
                scaleX,
                background: "linear-gradient(to right, #183EC2, #6b8cff, #3BFFFF)",
                transformOrigin: "0%",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                zIndex: 100,
            }}
        />
    );
};
