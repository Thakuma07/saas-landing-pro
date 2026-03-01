"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrambleText } from "@/components/ScrambleText";
import { RippleButton } from "@/components/RippleButton";
import { MagneticButton } from "@/components/MagneticButton";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start end", "end start"] });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip relative"
      style={{ background: "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)" }}
    >
      {/* Morphing blob background */}
      <div
        className="absolute top-10 right-10 w-[420px] h-[420px] opacity-30 pointer-events-none -z-0"
        style={{
          background: "linear-gradient(135deg, #183EC2 0%, #a78bfa 50%, #67e8f9 100%)",
          animation: "blobMorph 9s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />

      <div className="container relative z-10">
        <div className="md:flex items-center">
          <motion.div className="md:w-[478px]" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"
            >
              <ScrambleText text="Pathway to productivity" duration={1200} delay={400} />
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your success.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-1 items-center mt-[30px]">
              <MagneticButton strength={15}>
                <RippleButton
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Get for free
                </RippleButton>
              </MagneticButton>
              <MagneticButton strength={15}>
                <motion.button
                  className="btn btn-text flex gap-1"
                  whileHover={{ scale: 1.03, x: 2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <span>Learn more</span>
                  <ArrowIcon className="h-4 w-4" />
                </motion.button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              initial={{ opacity: 0, scale: 0.95, translateY: -30 }}
              animate={{ opacity: 1, scale: 1, translateY: [null, 30, -30] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                translateY: { delay: 1.2, duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              }}
            />
            <motion.img src={cylinderImage.src} width={220} height={220} alt="Cylinder" className="hidden md:block -top-8 -left-32 md:absolute" style={{ translateY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} />
            <motion.img src={noodleImage.src} width={220} alt="Noodle" className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]" style={{ rotate: 30, translateY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} />
          </div>
        </div>
      </div>
    </section>
  );
};
