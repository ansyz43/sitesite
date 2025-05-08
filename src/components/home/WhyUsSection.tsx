import React from "react";
import { motion } from "framer-motion";
import HomeVideoBackground from "./HomeVideoBackground";

const WhyUsSection = () => {
  const benefits = [
    {
      emoji: "⚡",
      title: "Скорость",
      description: "От концепции до доставки за дни, а не недели",
    },
    {
      emoji: "💰",
      title: "Бюджет -70%",
      description:
        "Значительная экономия по сравнению с традиционным производством",
    },
    {
      emoji: "♾",
      title: "Визуальная свобода",
      description: "Безграничные творческие возможности с ИИ",
    },
    {
      emoji: "📈",
      title: "Вовлечённость",
      description:
        "Более высокие показатели конверсии с персонализированным контентом",
    },
    {
      emoji: "🧩",
      title: "Единый стиль",
      description: "Последовательная айдентика бренда во всех материалах",
    },
  ];

  return (
    <HomeVideoBackground videoSrc="/2.mp4">
      <div className="w-full h-full flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Почему Выбирают Нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-[#E30613] transition-colors flex flex-col items-center"
              >
                <div className="text-4xl mb-4">{benefit.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400 font-montserrat text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </HomeVideoBackground>
  );
};

export default WhyUsSection;
