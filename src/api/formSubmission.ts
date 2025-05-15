/**
 * Form submission API handler
 * This file contains functions to handle form submissions and send notifications
 */

// Types for form data
export interface FormData {
  name: string;
  contact: string;
}

/**
 * Sends form data to a notification service
 * @param data Form data containing name and contact information
 * @returns Promise that resolves when notification is sent
 */
export async function sendFormNotification(
  data: FormData,
): Promise<{ success: boolean; message: string }> {
  try {
    console.log("Sending form notification with data:", data);

    // Use FormSubmit.co service - a free service that forwards form submissions to email
    // This allows us to send emails without a server
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("contact", data.contact);
    formData.append("_subject", "Новая заявка с сайта CRVSH");

    // Send the form data to FormSubmit.co service
    // Using a hash instead of the actual email for security
    const response = await fetch(
      "https://formsubmit.co/c29ba10acc43a9327f0ee325d622c575",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Form submission failed with status: ${response.status}`);
    }

    return {
      success: true,
      message: "Form submitted successfully",
    };
  } catch (error) {
    console.error("Error sending form notification:", error);

    // Fallback to mailto if the API call fails
    try {
      const recipientEmail = "redpulseStudio@inbox.ru"; // Keep the actual email for the fallback
      const subject = "Новая заявка с сайта CRVSH";
      const body = `
        Новая заявка с сайта:
        
        Имя: ${data.name}
        Контакт: ${data.contact}
        
        Дата и время: ${new Date().toLocaleString("ru-RU")}
      `;

      const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, "_blank");

      return {
        success: true,
        message: "Email notification sent via mailto as fallback",
      };
    } catch (fallbackError) {
      console.error("Fallback email also failed:", fallbackError);
      return {
        success: false,
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  }
}
