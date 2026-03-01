"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { RippleButton } from "@/components/RippleButton";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status !== "idle") return;
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500); // Mock network request
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-des mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
          <motion.img src={starImage.src} alt="star" width={360} className="absolute -left-[350px] -top-[137px]" style={{ translateY }} />
          <motion.img src={springImage.src} alt="spring" width={360} className="absolute -right-[331px] -top-[19px]" style={{ translateY }} />
        </div>
        <div className="flex justify-center mt-10">
          <form
            onSubmit={handleSubmit}
            className=" relative flex items-center w-full max-w-md bg-white rounded-full p-1.5 border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 focus-within:shadow-[0_8px_30px_rgba(30,58,138,0.15)] focus-within:border-[#1E3A8A]/30"
          >
            <input
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status !== "idle"}
              required
              className="flex-1 px-5 outline-none bg-transparent placeholder:text-black/30 text-black font-medium disabled:opacity-50"
            />
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <RippleButton
                  key="idle"
                  type="submit"
                  className="btn btn-primary rounded-full px-6 py-3 whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Join Waitlist
                </RippleButton>
              )}
              {status === "submitting" && (
                <motion.div
                  key="submitting"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="px-6 py-3 bg-black flex items-center justify-center rounded-full mr-1"
                >
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                </motion.div>
              )}
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-full flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Added!
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};
