"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";
import { TiltCard } from "@/components/TiltCard";
import { RippleButton } from "@/components/RippleButton";

const pricingTiers = [
  { title: "Free", monthlyPrice: 0, annualPrice: 0, buttonText: "Get started for free", popular: false, inverse: false, features: ["Up to 5 project members", "Unlimited tasks and projects", "2GB storage", "Integrations", "Basic support"] },
  { title: "Pro", monthlyPrice: 9, annualPrice: 7, buttonText: "Sign up now", popular: true, inverse: true, features: ["Up to 50 project members", "Unlimited tasks and projects", "50GB storage", "Integrations", "Priority support", "Advanced support", "Export support"] },
  { title: "Business", monthlyPrice: 19, annualPrice: 15, buttonText: "Sign up now", popular: false, inverse: false, features: ["Up to 5 project members", "Unlimited tasks and projects", "200GB storage", "Integrations", "Dedicated account manager", "Custom fields", "Advanced analytics", "Export capabilities", "API access", "Advanced security features"] },
];

/* Holographic Pro card */
function HoloCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [holo, setHolo] = useState({ x: 50, y: 50, active: false });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    setHolo({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100, active: true });
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={() => setHolo(h => ({ ...h, active: false }))} className={twMerge("relative overflow-hidden", className)}
      style={{ transition: "transform 0.15s ease-out", transformStyle: "preserve-3d" }}>
      {children}
      {/* Holographic sheen overlay */}
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300" style={{
        opacity: holo.active ? 1 : 0,
        background: `radial-gradient(circle at ${holo.x}% ${holo.y}%, rgba(255,255,255,0.15) 0%, rgba(183,107,255,0.1) 30%, rgba(65,216,255,0.08) 60%, transparent 80%)`,
        mixBlendMode: "screen",
      }} />
    </div>
  );
}

export const Pricing = () => {
  const [users, setUsers] = useState(1);

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-des mt-5">Free forever. Upgrade for unlimited tasks, better security, and exclusive features.</p>
        </div>

        {/* Users Slider */}
        <div className="max-w-[400px] mx-auto mt-12 mb-4 bg-white/50 backdrop-blur-xl p-6 rounded-3xl border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-center relative z-10">
          <label className="block text-sm font-bold text-black mb-4">
            Number of Project Members:
            <motion.span
              key={users}
              initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
              className="inline-block min-w-[2.5rem] ml-2 text-[#001E80] bg-[#001E80]/5 px-2 py-0.5 rounded-md"
            >
              {users}
            </motion.span>
          </label>
          <div className="relative h-2 bg-black/10 rounded-full mb-2 cursor-pointer group">
            {/* Active track */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-black rounded-l-full pointer-events-none"
              style={{ width: `${(users / 50) * 100}%` }}
              layout transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            {/* Input range overlay */}
            <input
              type="range"
              min="1" max="50" value={users}
              onChange={(e) => setUsers(parseInt(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
            />
            {/* Custom thumb */}
            <motion.div
              className="absolute top-1/2 -mt-3 w-6 h-6 bg-white border-2 border-black rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.2)] pointer-events-none group-hover:scale-110 group-active:scale-95 transition-transform"
              style={{ left: `calc(${(users / 50) * 100}% - 12px)` }}
              layout transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
          <div className="flex justify-between text-xs text-black/40 font-medium px-1">
            <span>Just me (1)</span>
            <span>Team (50)</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, monthlyPrice, annualPrice, buttonText, popular, features, inverse }) => {
            const CardWrapper = inverse ? HoloCard : TiltCard;
            return (
              <CardWrapper
                key={title}
                className={twMerge(
                  "p-10 rounded-3xl border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.08),_0_16px_40px_rgba(0,0,0,0.12)] max-w-xs w-full",
                  inverse && "border-black bg-black text-white shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                )}
              >
                <div className="flex justify-between">
                  <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>{title}</h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span animate={{ backgroundPositionX: "-100%" }} transition={{ duration: 1, repeat: Infinity, ease: "linear", repeatType: "loop" }} className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium">Popular</motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <AnimatePresence mode="wait">
                    <motion.span key={monthlyPrice * users} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="text-4xl font-bold tracking-tighter leading-none">
                      ${monthlyPrice * users}
                    </motion.span>
                  </AnimatePresence>
                  <span className={twMerge("tracking-tight font-bold text-black/50", inverse && "text-white/50")}>/month</span>
                </div>
                {monthlyPrice > 0 && <p className={twMerge("text-xs mt-1 text-black/40 font-medium", inverse && "text-white/40")}>Total for {users} member{users > 1 ? 's' : ''}</p>}
                <RippleButton
                  className={twMerge("btn btn-primary w-full mt-[30px]", inverse && "btn-primary-inverse")}
                  whileHover={{ scale: 1.04, y: -2, boxShadow: inverse ? "0 4px 20px rgba(255,255,255,0.35)" : "0 4px 20px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {buttonText}
                </RippleButton>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map(f => <li key={f} className="text-sm flex items-center gap-4"><CheckIcon className="h-6 w-6" /><span>{f}</span></li>)}
                </ul>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
