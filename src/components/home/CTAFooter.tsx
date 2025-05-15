import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Form validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя должно содержать минимум 2 символа" }),
  contact: z
    .string()
    .min(5, { message: "Пожалуйста, укажите корректный контакт" }),
});

type FormValues = z.infer<typeof formSchema>;

const CTAFooter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Import the sendFormNotification function from the API module
      const { sendFormNotification } = await import("../../api/formSubmission");

      // Send the form data to the notification service
      const result = await sendFormNotification({
        name: data.name,
        contact: data.contact,
      });

      if (result.success) {
        setSubmitSuccess(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="form" className="w-full py-20 text-white relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="text-white">Оставить заявку</span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  {...register("name")}
                  type="text"
                  placeholder="Ваше Имя"
                  className="bg-[#1a1a1a] border-gray-800 focus:border-[#E30613] h-12 font-montserrat"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-[#E30613] text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <Input
                  {...register("contact")}
                  type="text"
                  placeholder="Telegram или WhatsApp"
                  className="bg-[#1a1a1a] border-gray-800 focus:border-[#E30613] h-12 font-montserrat"
                  disabled={isSubmitting}
                />
                {errors.contact && (
                  <p className="text-[#E30613] text-xs mt-1">
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>

            {submitSuccess && (
              <div className="bg-green-900/30 border border-green-700 text-green-100 px-4 py-2 rounded-md">
                Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в
                ближайшее время.
              </div>
            )}

            {submitError && (
              <div className="bg-red-900/30 border border-red-700 text-red-100 px-4 py-2 rounded-md">
                {submitError}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-[#E30613] hover:bg-[#c00510] h-12 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Получите Вашу Концепцию за 24ч"}
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
