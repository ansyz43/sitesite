import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import ProcessTimeline from "./home/ProcessTimeline";
import CTAFooter from "./home/CTAFooter";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#111111] min-h-screen">
      <section className="bg-section bg-hero">
        <HeroSection />
      </section>
      <ServicesGrid />
      <ProcessTimeline />

      <section
        className="w-full relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/back (1).jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Наши работы */}
        <div className="py-16 md:py-24">
          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-8 text-center tracking-[4px] uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Наши работы
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
              <Link
                to="/portfolio"
                className="bg-[#1a1a1a]/80 border border-[#333333] hover:border-[#E30613] p-8 rounded-lg transition-all duration-300 ease-in-out text-center w-full md:w-1/2"
              >
                <h3 className="text-white text-2xl font-bold mb-3 tracking-[2px] uppercase">
                  Фото
                </h3>
              </Link>
              <div className="bg-[#1a1a1a]/80 border border-[#333333] p-8 rounded-lg text-center w-full md:w-1/2 opacity-70 cursor-not-allowed">
                <h3 className="text-white text-2xl font-bold mb-3 tracking-[2px] uppercase">
                  Видео <span className="text-sm font-normal">(Скоро)</span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Контакты */}
        <div className="pb-16">
          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Контакты
            </h2>
            <div className="flex flex-col items-center justify-center gap-6 text-white mb-16">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-[#E30613]" />
                <span className="text-xl">+7 909 900 1249</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-[#E30613]" />
                <span className="text-xl">redpulseStudio@inbox.ru</span>
              </div>
            </div>
          </div>
        </div>

        {/* Оставить заявку */}
        <div className="relative z-10">
          <CTAFooter />
        </div>
      </section>
      <footer className="bg-transparent text-white py-6">
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
    </div>
  );
};

export default Home;
