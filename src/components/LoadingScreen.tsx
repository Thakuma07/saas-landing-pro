"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Animate progress bar 0 → 100
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) { clearInterval(interval); return 100; }
                // Ease-out: fast at start, slow near 100
                return p + Math.max(1, (100 - p) * 0.08);
            });
        }, 20);

        // Hide after 1.4s
        const timeout = setTimeout(() => setLoading(false), 1400);
        return () => { clearInterval(interval); clearTimeout(timeout); };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white"
                >
                    {/* Logo mark */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-8"
                    >
                        <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                            <path d="M16 4 L28 12 L28 24 L16 28 L4 24 L4 12 Z" stroke="white" strokeWidth="1.5" fill="none" />
                            <circle cx="16" cy="16" r="4" fill="white" />
                        </svg>
                    </motion.div>

                    {/* Progress bar track */}
                    <div className="w-48 h-0.5 bg-black/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-black rounded-full"
                            style={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>

                    {/* Percentage */}
                    <motion.p
                        className="mt-4 text-xs text-black/30 font-mono tabular-nums"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                        {Math.round(progress)}%
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
