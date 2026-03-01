"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState, MouseEvent } from "react";

const stats = [
    { value: 10000, suffix: "+", label: "Active Users" },
    { value: 98, suffix: "%", label: "Satisfaction Rate" },
    { value: 4.9, suffix: "★", label: "App Rating" },
    { value: 2, prefix: "$", suffix: "M+", label: "Saved by Teams" },
];

function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const steps = 60;
        let step = 0;
        const timer = setInterval(() => {
            step++;
            setDisplay(parseFloat(Math.min((value / steps) * step, value).toFixed(decimals)));
            if (step >= steps) clearInterval(timer);
        }, 1800 / steps);
        return () => clearInterval(timer);
    }, [isInView, value, decimals]);

    return (
        <span ref={ref} className="text-5xl md:text-6xl font-bold tracking-tighter">
            {prefix}{decimals > 0 ? display.toFixed(decimals) : Math.floor(display).toLocaleString()}{suffix}
        </span>
    );
}

export const Stats = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [spot, setSpot] = useState({ x: -999, y: -999 });

    const onMouseMove = (e: MouseEvent<HTMLElement>) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const onMouseLeave = () => setSpot({ x: -999, y: -999 });

    return (
        <section
            ref={sectionRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="py-16 bg-black text-white overflow-x-clip relative"
        >
            {/* Spotlight overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(500px circle at ${spot.x}px ${spot.y}px, rgba(107,140,255,0.1), transparent 60%)`,
                }}
            />

            <div className="container relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-center text-center gap-2"
                        >
                            <div className="bg-gradient-to-r from-[#DD7DDF] via-[#71C2EF] to-[#3BFFFF] bg-clip-text text-transparent">
                                <AnimatedNumber value={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
                            </div>
                            <p className="text-white/50 text-sm tracking-tight">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
