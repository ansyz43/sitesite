import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import PortfolioSection from "./PortfolioSection";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const ProcessTimeline = () => {
  const steps = [
    { icon: "✓", title: "Brief", description: "Fill quick form" },
    { icon: "✎", title: "Concept", description: "Get 3 directions" },
    { icon: "⚙", title: "Generation", description: "AI creates content" },
    { icon: "✂", title: "Editing", description: "Human refinement" },
    { icon: "↗", title: "Delivery", description: "Ready to publish" },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our Process
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
              <p className="text-sm text-gray-600 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WhyUsSection = () => {
  const benefits = [
    {
      emoji: "⚡",
      title: "Speed",
      description: "From concept to delivery in days, not weeks",
    },
    {
      emoji: "💰",
      title: "Budget-70%",
      description: "Significant cost savings vs traditional production",
    },
    {
      emoji: "♾",
      title: "Visual freedom",
      description: "Unlimited creative possibilities with AI",
    },
    {
      emoji: "📈",
      title: "Engagement",
      description: "Higher conversion rates with tailored content",
    },
    {
      emoji: "🧩",
      title: "Unified style",
      description: "Consistent brand identity across all assets",
    },
  ];

  return (
    <div className="w-full py-16 bg-[#111111] text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-[#E30613] transition-colors"
            >
              <div className="text-4xl mb-4">{benefit.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PackagesTable = () => {
  const packages = [
    {
      name: "Start",
      price: "$999",
      features: [
        "1 AI Video (30s)",
        "5 Product Images",
        "Basic Instagram Setup",
        "3 Day Delivery",
        "1 Revision",
      ],
    },
    {
      name: "Boost",
      price: "$1,999",
      features: [
        "3 AI Videos (30s)",
        "15 Product Images",
        "Full Instagram Makeover",
        "5 Day Delivery",
        "2 Revisions",
        "Performance Analytics",
      ],
    },
    {
      name: "Scale",
      price: "$3,999",
      features: [
        "5 AI Videos (up to 60s)",
        "30 Product Images",
        "Full Instagram + TikTok Package",
        "Priority 3 Day Delivery",
        "Unlimited Revisions",
        "Performance Analytics",
        "Monthly Content Calendar",
      ],
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Packages
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="p-4 text-left border-b-2 border-gray-200">
                  Package
                </th>
                <th className="p-4 text-left border-b-2 border-gray-200">
                  Price
                </th>
                <th className="p-4 text-left border-b-2 border-gray-200">
                  Features
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
                    <ul className="list-disc pl-5 space-y-1">
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
                      Select
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
            Ready to CRVSH your content?
          </span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#1a1a1a] border-gray-800 focus:border-[#E30613] h-12"
                  required
                />
              </div>
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Telegram or WhatsApp"
                  className="bg-[#1a1a1a] border-gray-800 focus:border-[#E30613] h-12"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#E30613] hover:bg-[#c00510] h-12 text-lg"
            >
              Get Your Concept in 24h
            </Button>

            <p className="text-xs text-gray-400 text-center">
              By submitting this form, you agree to our privacy policy. We'll
              never share your information with third parties.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-[#111111] min-h-screen">
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
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
