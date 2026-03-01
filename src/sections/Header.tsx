"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = ["About", "Features", "Customers", "Updates", "Help"];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 backdrop-blur-sm z-20">
        {/* Announcement bar */}
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
          <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
          <motion.div
            className="inline-flex gap-1 items-center cursor-pointer"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <p>Get started for free</p>
            <motion.span
              className="inline-flex"
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.div>
        </div>

        {/* Main nav */}
        <div className="py-5 bg-white/80 backdrop-blur-md border-b border-black/5">
          <div className="container">
            <div className="flex items-center justify-between">
              <Image src={Logo} alt="Saas logo" height={40} width={40} />

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-1 cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={mobileOpen ? "open" : "closed"}
                  className="w-6 h-5 flex flex-col justify-between"
                >
                  <motion.span
                    variants={{ open: { rotate: 45, y: 9 }, closed: { rotate: 0, y: 0 } }}
                    transition={{ duration: 0.25 }}
                    className="block h-0.5 w-full bg-black rounded-full origin-left"
                  />
                  <motion.span
                    variants={{ open: { opacity: 0, x: -8 }, closed: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.2 }}
                    className="block h-0.5 w-full bg-black rounded-full"
                  />
                  <motion.span
                    variants={{ open: { rotate: -45, y: -9 }, closed: { rotate: 0, y: 0 } }}
                    transition={{ duration: 0.25 }}
                    className="block h-0.5 w-full bg-black rounded-full origin-left"
                  />
                </motion.div>
              </button>

              {/* Desktop nav */}
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                {navLinks.map((link) => (
                  <a key={link} href="" className="relative group py-1 text-sm font-medium hover:text-black transition-colors duration-200">
                    {link}
                    <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-250 group-hover:w-full rounded-full" />
                  </a>
                ))}
                <motion.button
                  className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Get for free
                </motion.button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-40 shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-black/10">
                <Image src={Logo} alt="Saas logo" height={36} width={36} />
                <button onClick={() => setMobileOpen(false)} className="text-black/60 hover:text-black text-2xl leading-none cursor-pointer">
                  ✕
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href=""
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="text-black/70 hover:text-black font-medium py-3 px-3 rounded-lg hover:bg-black/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
              <div className="p-6 border-t border-black/10">
                <button className="btn btn-primary w-full">Get for free</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
