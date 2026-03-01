"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    { step: "01", title: "Create your workspace", desc: "Set up your team's hub in minutes. Import existing projects or start fresh with powerful templates.", color: "#3B82F6", emoji: "🚀" },
    { step: "02", title: "Invite your team", desc: "Bring everyone together. Set roles, permissions, and access levels so each person has exactly what they need.", color: "#8B5CF6", emoji: "👥" },
    { step: "03", title: "Assign & track tasks", desc: "Create tasks, set deadlines, and watch progress in real time. Full visibility across every project.", color: "#06B6D4", emoji: "✅" },
    { step: "04", title: "Ship & celebrate", desc: "Hit your milestones, celebrate wins together, and carry momentum into the next sprint.", color: "#10B981", emoji: "🎉" },
];

export const HorizontalShowcase = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    // Each card slot = 100vw. Track = 4 × 100vw. We translate by 0 → -300vw.
    // Finish at 0.78 so Step 04 dwells on screen for the last ~22% of scroll before section ends.
    const x = useTransform(scrollYProgress, [0, 0.78], ["0vw", `-${(steps.length - 1) * 100}vw`]);
    const pathLength = useTransform(scrollYProgress, [0.05, 0.75], [0, 1]);

    return (
        <section ref={targetRef} className="bg-[#060C1F]" style={{ height: `${steps.length * 100 + 100}vh` }}>
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col" style={{ paddingTop: "110px" }}>

                {/* Header */}
                <div className="px-8 md:px-16 flex-shrink-0">
                    <div className="max-w-7xl mx-auto flex items-end justify-between">
                        <div>
                            <span className="inline-block border border-white/10 text-white/40 text-xs px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
                                How it works
                            </span>
                            <h2 className="text-3xl md:text-[48px] font-bold text-white tracking-tighter leading-tight">
                                Four steps to{" "}
                                <span className="text-[#6b8cff]">ship faster</span>
                            </h2>
                        </div>
                        <motion.p
                            className="hidden md:block text-white/30 text-sm mb-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        >
                            Scroll to explore →
                        </motion.p>
                    </div>

                    {/* SVG path connecting steps */}
                    <div className="max-w-7xl mx-auto mt-3 mb-1">
                        <svg viewBox="0 0 1200 20" className="w-full h-5" preserveAspectRatio="none">
                            <motion.path
                                d="M 0 10 C 300 0 600 20 900 10 C 1050 4 1150 16 1200 10"
                                stroke="rgba(107,140,255,0.35)"
                                strokeWidth="1.5"
                                strokeDasharray="5 4"
                                fill="none"
                                style={{ pathLength }}
                            />
                            {steps.map((s, i) => (
                                <motion.circle
                                    key={i}
                                    cx={(i / (steps.length - 1)) * 1200}
                                    cy={10}
                                    r={5}
                                    fill={s.color}
                                    style={{ opacity: useTransform(scrollYProgress, [Math.max(0, i * 0.25 - 0.05), i * 0.25], [0, 1]) }}
                                />
                            ))}
                        </svg>
                    </div>
                </div>

                {/* Cards track — fills remaining height */}
                <div className="flex-1 overflow-hidden">
                    <motion.div
                        className="flex h-full items-center"
                        style={{ x, width: `${steps.length * 100}vw` }}
                    >
                        {steps.map((step, i) => (
                            <div
                                key={step.step}
                                className="flex-shrink-0 flex items-center justify-center px-12"
                                style={{ width: "100vw", height: "100%" }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    className="relative overflow-hidden rounded-3xl border border-white/10 p-10 w-full cursor-default"
                                    style={{
                                        maxWidth: "560px",
                                        background: "rgba(255,255,255,0.04)",
                                        backdropFilter: "blur(20px)",
                                        boxShadow: `0 25px 60px ${step.color}30, inset 0 1px 0 rgba(255,255,255,0.06)`,
                                        transition: "transform 0.3s ease",
                                    }}
                                >
                                    {/* Glow */}
                                    <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: step.color }} />

                                    {/* Step badge */}
                                    <div
                                        className="inline-flex items-center gap-1.5 mb-6 px-3 py-1 rounded-full text-xs font-bold tracking-widest border"
                                        style={{ color: step.color, borderColor: `${step.color}50`, background: `${step.color}18` }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: step.color }} />
                                        STEP {step.step}
                                    </div>

                                    <div className="text-5xl mb-5 leading-none">{step.emoji}</div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3">{step.title}</h3>
                                    <p className="text-white/50 leading-relaxed">{step.desc}</p>

                                    {/* Watermark */}
                                    <div
                                        className="absolute -bottom-8 -right-2 text-[130px] font-black leading-none opacity-[0.05] select-none pointer-events-none"
                                        style={{ color: step.color }}
                                    >
                                        {step.step}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Step dots */}
                <div className="flex justify-center gap-2 pb-6 flex-shrink-0">
                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            className="h-1 rounded-full"
                            style={{
                                background: s.color,
                                width: useTransform(
                                    scrollYProgress,
                                    [i * 0.25, i * 0.25 + 0.05, (i + 1) * 0.25 - 0.05, (i + 1) * 0.25],
                                    ["8px", "24px", "24px", "8px"]
                                ),
                                opacity: useTransform(
                                    scrollYProgress,
                                    [i * 0.25, i * 0.25 + 0.05],
                                    [0.3, 1]
                                ),
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
