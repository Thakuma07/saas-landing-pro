import { CallToAction } from "@/sections/CallToAction";
import { FAQ } from "@/sections/FAQ";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { HorizontalShowcase } from "@/sections/HorizontalShowcase";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Integrations } from "@/sections/Integrations";
import { Stats } from "@/sections/Stats";
import { Testimonials } from "@/sections/Testimonials";
import { WaveDivider } from "@/components/WaveDivider";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WaveDivider from="#EAEEFE" to="#000000" />
      <Stats />
      <WaveDivider from="#000000" to="#ffffff" />
      <LogoTicker />
      <Features />
      <WaveDivider from="#ffffff" to="#060C1F" />
      <HorizontalShowcase />
      <WaveDivider from="#060C1F" to="#ffffff" />
      <Integrations />
      <WaveDivider from="#ffffff" to="#D2DCFF" />
      <ProductShowcase />
      <WaveDivider from="#D2DCFF" to="#ffffff" />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}
