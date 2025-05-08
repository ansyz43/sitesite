import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const PackagesTable = () => {
  const packages = [
    {
      name: "Старт",
      price: "$999",
      features: [
        "1 AI Видео (30с)",
        "5 Продуктовых Изображений",
        "Базовая Настройка Instagram",
        "Доставка за 3 Дня",
        "1 Правка",
      ],
    },
    {
      name: "Буст",
      price: "$1,999",
      features: [
        "3 AI Видео (30с)",
        "15 Продуктовых Изображений",
        "Полное Преображение Instagram",
        "Доставка за 5 Дней",
        "2 Правки",
        "Аналитика Эффективности",
      ],
    },
    {
      name: "Масштаб",
      price: "$3,999",
      features: [
        "5 AI Видео (до 60с)",
        "30 Продуктовых Изображений",
        "Полный Пакет Instagram + TikTok",
        "Приоритетная Доставка за 3 Дня",
        "Безлимитные Правки",
        "Аналитика Эффективности",
        "Ежемесячный Контент-Календарь",
      ],
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Пакеты
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="p-4 text-left border-b-2 border-gray-200">
                  Пакет
                </th>
                <th className="p-4 text-left border-b-2 border-gray-200">
                  Цена
                </th>
                <th className="p-4 text-left border-b-2 border-gray-200">
                  Особенности
                </th>
                <th className="p-4 text-left border-b-2 border-gray-200"></th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`border-b ${index === 1 ? "border-[#E30613]" : "border-gray-200"}`}
                >
                  <td className="p-4 font-bold text-xl">{pkg.name}</td>
                  <td className="p-4 text-xl">{pkg.price}</td>
                  <td className="p-4">
                    <ul className="list-disc pl-5 space-y-1 font-montserrat">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-4">
                    <Button
                      variant={index === 1 ? "default" : "outline"}
                      className={
                        index === 1 ? "bg-[#E30613] hover:bg-[#c00510]" : ""
                      }
                    >
                      Выбрать
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PackagesTable;
