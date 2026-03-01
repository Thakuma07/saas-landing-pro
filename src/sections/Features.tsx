"use client";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

const features = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Task Management", description: "Organize, prioritize, and track every task with ease. Drag-and-drop boards, deadlines, and sub-tasks keep your team perfectly aligned." },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>, title: "Real-time Collaboration", description: "Work together seamlessly with live cursors, shared documents, and instant comments. No more version conflicts." },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>, title: "Advanced Analytics", description: "Visualize team performance with beautiful dashboards. Track velocity, burndown rates, and productivity trends in real time." },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>, title: "Smart Integrations", description: "Connect Slack, GitHub, Figma, Notion, and 100+ more. Everything speaks to each other without any friction." },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>, title: "AI-Powered Insights", description: "Let AI surface blockers, predict delays, and suggest optimisations before problems happen. Work smarter, not harder." },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>, title: "Enterprise Security", description: "Bank-grade AES-256 encryption, SSO, role-based access controls, and full audit logs. Your data is always safe." },
];

export const Features = () => (
    <section className="py-24 bg-white overflow-hidden">
        <div className="container max-w-6xl">
            <div className="section-heading">
                <div className="flex justify-center"><div className="tag">Features</div></div>
                <h2 className="section-title mt-5">Everything you need to ship faster</h2>
                <p className="section-des mt-5">One platform to plan, build, and deliver. Designed for teams who move fast and care about quality.</p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[minmax(250px,auto)_minmax(250px,auto)] gap-4 mt-16 max-w-5xl mx-auto">
                <TiltCard className="md:col-span-2 bg-[#F8FAFC] rounded-3xl p-8 md:p-10 border border-[#E2E8F0] shadow-sm relative overflow-hidden group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#183EC2] to-[#6b8cff] flex items-center justify-center text-white mb-5 relative z-10">{features[0].icon}</div>
                    <h3 className="font-bold text-2xl text-black tracking-tight relative z-10">{features[0].title}</h3>
                    <p className="text-black/60 mt-3 text-base leading-relaxed max-w-md relative z-10">{features[0].description}</p>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-tl from-[#183EC2]/20 to-transparent blur-3xl rounded-full transition-transform duration-500 group-hover:scale-150" />
                </TiltCard>

                <TiltCard className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#E2E8F0] shadow-sm relative overflow-hidden group">
                    <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-[#183EC2] mb-5">{features[1].icon}</div>
                    <h3 className="font-bold text-lg text-black tracking-tight">{features[1].title}</h3>
                    <p className="text-black/60 mt-2 text-sm leading-relaxed">{features[1].description}</p>
                </TiltCard>

                <TiltCard className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#E2E8F0] shadow-sm relative overflow-hidden group">
                    <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-emerald-600 mb-5">{features[2].icon}</div>
                    <h3 className="font-bold text-lg text-black tracking-tight">{features[2].title}</h3>
                    <p className="text-black/60 mt-2 text-sm leading-relaxed">{features[2].description}</p>
                </TiltCard>

                <TiltCard className="md:col-span-2 bg-black rounded-3xl p-8 md:p-10 border border-black shadow-xl relative overflow-hidden group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#3BFFFF] mb-5 relative z-10">{features[4].icon}</div>
                    <h3 className="font-bold text-2xl text-white tracking-tight relative z-10">{features[4].title}</h3>
                    <p className="text-white/60 mt-3 text-base leading-relaxed max-w-md relative z-10">{features[4].description}</p>
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-bl from-[#3BFFFF]/20 to-transparent blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                    {/* Mock glowing code lines */}
                    <div className="absolute right-8 bottom-8 flex flex-col gap-2 opacity-20 pointer-events-none">
                        <div className="w-32 h-2 bg-gradient-to-r from-[#3BFFFF] to-transparent rounded-full" />
                        <div className="w-24 h-2 bg-gradient-to-r from-[#71C2EF] to-transparent rounded-full" />
                        <div className="w-40 h-2 bg-gradient-to-r from-[#DD7DDF] to-transparent rounded-full" />
                    </div>
                </TiltCard>
            </div>
        </div>
    </section>
);
