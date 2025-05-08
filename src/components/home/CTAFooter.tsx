import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CTAFooter = () => {
  return (
    <div
      id="form"
      className="w-full py-20 bg-[#111111] text-white relative overflow-hidden"
    >
      {/* Background image with red abstract art */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('/u3178933537_Full-page_scroll_website_concept_for_a_creative_A_992ff31d-756e-47b9-a27b-d8b6fd3342e3_2.png')",
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E30613]">
            Готовы CRVSH ваш контент?
          </span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Ваше Имя"
                  className="bg-[#1a1a1a] border-gray-800 focus:border-[#E30613] h-12 font-montserrat"
                  required
                />
              </div>
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Telegram или WhatsApp"
                  className="bg-[#1a1a1a] border-gray-800 focus:border-[#E30613] h-12 font-montserrat"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#E30613] hover:bg-[#c00510] h-12 text-lg"
            >
              Получите Вашу Концепцию за 24ч
            </Button>

            <p className="text-xs text-gray-400 text-center font-montserrat">
              Отправляя эту форму, вы соглашаетесь с нашей политикой
              конфиденциальности. Мы никогда не передадим вашу информацию
              третьим лицам.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTAFooter;
