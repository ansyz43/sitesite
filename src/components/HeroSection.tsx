import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection = ({
  onCtaClick = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }),
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent">
      {/* Content container */}
      <div className="container relative z-10 mx-auto flex h-full max-w-[1280px] flex-col px-8 md:px-[120px] justify-between items-center font-light text-xl py-[10vh] w-10/12 text-[#b86565]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl w-10/12 text-lg flex flex-col mt-20 justify-center items-center"
        >
          {/* Main headline - centered in the upper part */}
        </motion.div>
        <motion.h1
          className="font-sans text-white md:text-4xl lg:text-5xl container text-center tracking-[0.8999999999999999px] leading-[56.25px] text-[62px] font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Качественный Контент для{" "}
            </motion.span>
            <motion.span
              className="text-[#E30613] tracking-[2.05px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              бренда
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {" "}
              и{" "}
            </motion.span>
            <motion.span
              className="text-[#E30613]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              соцсетей
            </motion.span>
            <motion.div
              className="mt-4 underline tracking-[2.6500000000000004px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              Быстро. Качественно.
            </motion.div>
          </motion.span>
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-8 justify-center items-center font-normal">
          <motion.div
            className="inline-block w-[400px] h-[120px] text-left opacity-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <p
                className="text-xl md:text-2xl text-white font-bold text-center tracking-[1.5px] m-0 font-montserrat"
                style={{
                  textShadow:
                    "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                }}
              >
                ИСКУССТВЕННЫЙ + <br />
                НАТУРАЛЬНЫЙ
              </p>
              <p
                className="text-xl md:text-2xl text-white font-bold text-center tracking-[1.5px] m-0 font-montserrat"
                style={{
                  textShadow:
                    "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                }}
              >
                ИНТЕЛЛЕКТ
              </p>
            </div>
          </motion.div>
          <motion.span
            className="text-3xl md:text-4xl font-bold text-white mx-1 md:mx-2 text-shadow-lg tracking-[1.5px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            style={{
              textShadow:
                "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
            }}
          >
            =
          </motion.span>
          <motion.div
            className="inline-block w-[400px] h-[120px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <p
                className="text-xl md:text-2xl text-white font-bold text-center tracking-[1.5px] m-0 font-montserrat"
                style={{
                  textShadow:
                    "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                }}
              >
                ОТ ИДЕИ — ДО РОЛИКА
              </p>
              <p
                className="text-xl md:text-2xl text-white font-bold text-center tracking-[1.5px] m-0 font-montserrat"
                style={{
                  textShadow:
                    "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                }}
              >
                4К И INSTAGRAM-ПРОФИЛЯ
              </p>
              <p
                className="text-xl md:text-2xl text-white font-bold text-center tracking-[1.5px] m-0 font-montserrat"
                style={{
                  textShadow:
                    "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                }}
              >
                ЗА 5 ДНЕЙ.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="w-full flex flex-col mb-20 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.7 }}
        >
          {/* Subheading - positioned at the bottom */}

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              onClick={onCtaClick}
              className="bg-[#E30613] px-10 py-7 text-xl font-medium text-black hover:bg-[#E30613]/90 rounded-md leading-10"
            >
              Получить <span className="text-white"> концепцию </span> за 24 ч
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 4.0, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, delay: 4.0 },
        }}
      >
        <div className="h-12 w-6 rounded-full border-2 border-white/30">
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-white/50"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
