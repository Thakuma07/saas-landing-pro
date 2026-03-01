"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 500);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="btt"
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    whileHover={{ scale: 1.12, y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
                    whileTap={{ scale: 0.92 }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};
