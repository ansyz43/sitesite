import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  duration: string;
  features: string[];
  icon: string;
}

const ServiceCard = ({
  title,
  duration,
  features,
  icon = "🎬",
}: ServiceCardProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className="relative h-[300px] w-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="absolute w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <Card className="w-full h-full flex flex-col justify-center items-center bg-[#111111] text-white border-[#333333] hover:border-[#E30613] transition-colors">
          <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="text-[#E30613] font-semibold">{duration}</div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="absolute w-full h-full"
        initial={{ rotateY: 180 }}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.4 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <Card className="w-full h-full flex flex-col justify-center bg-[#111111] text-white border-[#E30613] transition-colors">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-[#E30613]">{title}</h3>
            <ul className="list-disc pl-5 space-y-2">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

const ServicesGrid = () => {
  const services: ServiceCardProps[] = [
    {
      title: "AI Video Ads",
      duration: "3-5 d",
      icon: "🎬",
      features: [
        "Full 4K commercial",
        "Custom script",
        "Voice-over",
        "Background music",
        "Multiple aspect ratios",
      ],
    },
    {
      title: "AI Photoshoot",
      duration: "48 h",
      icon: "📸",
      features: [
        "Up to 20 unique images",
        "Custom art direction",
        "Product integration",
        "Brand style matching",
        "Commercial usage rights",
      ],
    },
    {
      title: "Product Cards",
      duration: "24 h",
      icon: "🛍️",
      features: [
        "E-commerce ready",
        "White background option",
        "Lifestyle variations",
        "Detail shots",
        "Instant delivery",
      ],
    },
    {
      title: "Instagram Makeover",
      duration: "5 d",
      icon: "📱",
      features: [
        "Profile redesign",
        "9 grid posts",
        "5 story templates",
        "Highlight covers",
        "Bio optimization",
      ],
    },
  ];

  return (
    <section className="w-full py-24 bg-[#111111] relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            "url('/u3178933537_Ultra-minimalist_website_homepage_for_a_creative__8f4393c4-71a5-4bc1-8103-dea1867edc22_0.png')",
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
