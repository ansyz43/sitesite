import React from "react";
import { motion } from "framer-motion";

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
      <div className="container relative z-10 mx-auto flex h-full max-w-[1280px] flex-col px-8 md:px-[120px] justify-center items-center py-[10vh] w-10/12 bg-transparent rounded-lg">
        <motion.div className="flex flex-row justify-center items-center w-full">
          <div className="w-full flex flex-row justify-center items-center gap-8 px-8">
            {[1, 2, 3, 4].map((num, index) => (
              <motion.div
                key={num}
                className="w-[40%] aspect-[3/4] h-[80vh]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              >
                <video
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={`/11 (${num}).mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text overlay that appears after videos */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1.0 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            Создаём контент, который запоминается.
          </motion.h1>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.0, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, delay: 2.0 },
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
