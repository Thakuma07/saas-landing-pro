"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantamLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div
          className="flex overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
        >
          <div
            className="flex gap-14 flex-none pr-14 cursor-pointer"
            style={{ animation: "ticker 20s linear infinite" }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            <Image src={acmeLogo} alt="Acme logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
            <Image src={quantamLogo} alt="quantam logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
            <Image src={echoLogo} alt="Echo logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
            <Image src={celestialLogo} alt="celestial logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
            <Image src={pulseLogo} alt="Pulse logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
            <Image src={apexLogo} alt="Apex logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />

            <Image src={acmeLogo} alt="Acme logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
            <Image src={quantamLogo} alt="quantam logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
            <Image src={echoLogo} alt="Echo logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
            <Image src={celestialLogo} alt="celestial logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
            <Image src={pulseLogo} alt="Pulse logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
            <Image src={apexLogo} alt="Apex logo" className="logo-ticker-image grayscale transition duration-300 hover:grayscale-0 opacity-70 hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
};
