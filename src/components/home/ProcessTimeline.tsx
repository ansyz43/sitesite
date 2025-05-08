import React from "react";
import { motion } from "framer-motion";

const ProcessTimeline = () => {
  const steps = [
    { icon: "✓", title: "Бриф", description: "Заполните форму" },
    { icon: "✎", title: "Концепция", description: "Получите 3 направления" },
    { icon: "⚙", title: "Генерация", description: "ИИ создаёт контент" },
    { icon: "✂", title: "Редактура", description: "Доработка человеком" },
    { icon: "↗", title: "Доставка", description: "Готово к публикации" },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Наш Процесс
        </h2>
        <div className="relative flex flex-col md:flex-row justify-between items-start">
          {/* Red line connecting steps */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[#E30613] z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/5"
            >
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#E30613] flex items-center justify-center text-2xl text-[#E30613] mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600 text-center font-montserrat">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
