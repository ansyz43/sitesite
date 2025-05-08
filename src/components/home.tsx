import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import PortfolioSection from "./PortfolioSection";
import ProcessTimeline from "./home/ProcessTimeline";
import WhyUsSection from "./home/WhyUsSection";
import PackagesTable from "./home/PackagesTable";
import CTAFooter from "./home/CTAFooter";
import HomeVideoBackground from "./home/HomeVideoBackground";

const Home = () => {
  return (
    <HomeVideoBackground>
      <div className="bg-transparent min-h-screen">
        <HeroSection />
        <ServicesGrid />
        <ProcessTimeline />
        <WhyUsSection />
        <PortfolioSection />
        <PackagesTable />
        <CTAFooter />
        <footer className="bg-black text-white py-6">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">
                  redpulse<span className="text-[#E30613]">studio</span>.ru
                </h3>
              </div>
              <div className="text-sm text-gray-400 font-montserrat">
                © {new Date().getFullYear()} Все права защищены
              </div>
            </div>
          </div>
        </footer>
        <div className="w-[554px] h-[247px]"></div>
        <div className="w-[800px] h-[600px] text-base"></div>
      </div>
    </HomeVideoBackground>
  );
};

export default Home;
