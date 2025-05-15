import React from "react";
import { motion } from "framer-motion";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceItem = ({ title, description, icon }: ServiceItemProps) => {
  return (
    <motion.div
      className="bg-[#111111] border border-[#333333] hover:border-[#E30613] p-6 rounded-lg transition-all duration-300 ease-in-out"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {icon && icon.length > 0 && (
        <div className="text-[#E30613] text-3xl mb-4">{icon}</div>
      )}
      <h3 className="text-white text-xl font-bold mb-3 tracking-[2px] uppercase">
        {title}
      </h3>
      <p className="text-gray-300 font-montserrat">{description}</p>
    </motion.div>
  );
};

const ServicesGrid = () => {
  const services: ServiceItemProps[] = [
    {
      title: "Видео",
      description:
        "Создаем высококачественные видеоролики с использованием AI технологий для продвижения вашего бренда и продуктов.",
      icon: "",
    },
    {
      title: "Фото для бренда",
      description:
        "Разрабатываем уникальные фотоматериалы, которые отражают индивидуальность вашего бренда и привлекают внимание аудитории.",
      icon: "",
    },
    {
      title: "Упаковка инстаграма",
      description:
        "Комплексное оформление вашего Instagram-профиля: посты, истории, обложки и оптимизация био для максимального вовлечения.",
      icon: "",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#111111] relative overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-16 text-center tracking-[8px] uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textShadow:
              "0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black",
          }}
        >
          Наши услуги
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
