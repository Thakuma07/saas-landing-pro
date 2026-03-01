"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const translateYLarge = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>

          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-des mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes
            with this template.
          </p>
        </div>

        <div className="relative mt-10 perspective-[1000px]">
          <motion.div style={{ rotateX, translateZ }}>
            <Image src={productImage} alt="Product image" className="rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]" />
          </motion.div>

          {/* Fast Parallax */}
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32 drop-shadow-2xl"
            style={{
              translateY: translateYLarge,
            }}
          />
          {/* Slow Parallax */}
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36 drop-shadow-2xl"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
