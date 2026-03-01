"use client";
import { motion } from "framer-motion";

const apps = [
    {
        name: "Slack", color: "#E01E5A", icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.523 2.527 2.527 0 0 1 2.521 2.523v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.523-2.522v-2.522h2.523zM15.165 17.688a2.527 2.527 0 0 1-2.523-2.523 2.526 2.526 0 0 1 2.523-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" /></svg>
    },
    {
        name: "GitHub", color: "#24292e", icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
    },
    {
        name: "Figma", color: "#F24E1E", icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><title>Figma</title><path d="M8.07 19.965A4.018 4.018 0 0 1 4.035 15.93c0-2.219 1.815-4.001 4.035-4.001h3.965v4.001A4.018 4.018 0 0 1 8.07 19.965zM8.07 11.93A4.018 4.018 0 0 1 4.035 7.895C4.035 5.676 5.85 3.894 8.07 3.894h3.965v8.036H8.07zm7.895 0c-2.22 0-4.035-1.782-4.035-4.001A4.018 4.018 0 0 1 15.965 3.894c2.22 0 4.035 1.782 4.035 4.001A4.018 4.018 0 0 1 15.965 11.93zM12.035 15.93a4.018 4.018 0 0 0 4.035-4.001c0-2.219-1.815-4.001-4.035-4.001v8.002z" /></svg>
    },
    {
        name: "Notion", color: "#000000", icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><title>Notion</title><path d="M21.374 2.657a22.213 22.213 0 0 0-3.391-.256C13.88 2.4 8.793 2.912 3.149 4.192 2.637 4.576 2.4 5.344 2.4 6.368v13.568c0 1.28.384 1.664 1.152 1.92 6.528-1.536 12.032-2.176 17.536-2.048.512-.384.768-1.024.768-2.048V3.68c-.128-.512-.256-.896-.482-1.023zM9.932 17.888H8.396L8.012 9.056H6.732v-1.152h4.608L14.412 15.712l.256-6.4V8.032h1.664v1.152H14.924L10.059 17.888z" /></svg>
    },
    {
        name: "Zoom", color: "#2D8CFF", icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><title>Zoom</title><path d="M4.31 4.545c-2.316 0-4.148 1.832-4.148 4.148v6.417c0 2.316 1.832 4.147 4.148 4.147h9.098c2.315 0 4.147-1.831 4.147-4.147v-6.417c0-2.316-1.832-4.148-4.147-4.148H4.31zm14.394 1.706L24 2.768v18.464l-5.295-3.483V6.251z" /></svg>
    },
    { name: "Jira", color: "#0052CC", icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><title>Jira</title><path d="M11.53 17.828a3.14 3.14 0 0 1-3.132 3.136 3.14 3.14 0 0 1-3.136-3.136c0-1.734 1.4-3.14 3.136-3.14a3.14 3.14 0 0 1 3.132 3.14zm0-9.42c0-1.731-1.4-3.132-3.132-3.132a3.14 3.14 0 0 0-3.136 3.132c0 1.738 1.4 3.144 3.136 3.144a3.14 3.14 0 0 0 3.132-3.144zm0 4.716c0-1.728-1.4-3.132-3.132-3.132a3.14 3.14 0 0 0-3.136 3.132 3.14 3.14 0 0 0 3.136 3.136 3.14 3.14 0 0 0 3.132-3.136zm5.83-4.716a3.14 3.14 0 0 1-3.136 3.132c-1.74 0-3.14-1.406-3.14-3.132A3.14 3.14 0 0 1 14.224 5.275c1.735 0 3.136 1.4 3.136 3.132zm0 4.716a3.14 3.14 0 0 1-3.136 3.136c-1.74 0-3.14-1.4-3.14-3.136a3.14 3.14 0 0 1 3.14-3.132c1.735 0 3.136 1.404 3.136 3.132zM23.195 8.41a3.14 3.14 0 0 1-3.132 3.13a3.14 3.14 0 0 1-3.14-3.13c0-1.735 1.405-3.138 3.14-3.138s3.132 1.403 3.132 3.138z" /></svg> },
];

export const Integrations = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container">
                <div className="section-heading text-center">
                    <div className="flex justify-center"><div className="tag">Integrations</div></div>
                    <h2 className="section-title mt-5">Connects with everything</h2>
                    <p className="section-des mt-5">Your workflow shouldn't be fragmented. We integrate with your favorite tools seamlessly.</p>
                </div>

                <div className="relative h-[600px] max-w-4xl mx-auto mt-16 flex items-center justify-center">

                    {/* Central App Node */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="relative z-20 w-32 h-32 rounded-3xl bg-black border-[4px] border-white shadow-[0_0_60px_rgba(0,0,0,0.15)] flex items-center justify-center pointer-events-none"
                    >
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#183EC2] to-[#6b8cff] shadow-inner" />
                    </motion.div>

                    {/* Surrounding Nodes & Lines */}
                    {apps.map((app, i) => {
                        const angle = (i * 360) / apps.length;
                        const radius = 200; // Distance from center
                        // Calculate absolute position relative to center
                        const rad = (angle * Math.PI) / 180;
                        const x = Math.cos(rad) * radius;
                        const y = Math.sin(rad) * radius;

                        return (
                            <div key={app.name} className="absolute left-1/2 top-1/2" style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}>
                                {/* Connecting Line (SVG drawing from center to node) */}
                                <svg className="absolute pointer-events-none z-0" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: radius * 2.5, height: radius * 2.5, overflow: "visible" }}>
                                    <motion.line
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 0.15 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: "easeOut" }}
                                        x1="0" y1="0" x2={-x} y2={-y}
                                        stroke="black" strokeWidth="2" strokeDasharray="6 6"
                                        transform={`translate(${radius * 1.25 + x}, ${radius * 1.25 + y})`}
                                    />
                                    {/* Animated glowing dot moving along the line */}
                                    <motion.circle
                                        initial={{ cx: radius * 1.25 + x, cy: radius * 1.25 + y, opacity: 0 }}
                                        animate={{ cx: radius * 1.25, cy: radius * 1.25, opacity: [0, 1, 1, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 + 0.5, ease: "linear" }}
                                        r="3"
                                        fill={app.color}
                                        style={{
                                            filter: "drop-shadow(0 0 4px currentColor)"
                                        }}
                                    />
                                </svg>

                                {/* Node Box */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.15, y: -5, boxShadow: `0 10px 40px ${app.color}40` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                                    className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-black/5 shadow-lg flex items-center justify-center font-bold text-2xl text-white cursor-pointer"
                                    style={{ backgroundColor: app.color }}
                                >
                                    {app.icon}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
