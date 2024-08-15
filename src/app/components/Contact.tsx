import React, { useState } from "react";
import ContentSection from "./layout/ContentSection";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitFeedback("");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setSubmitFeedback(
        "Thank you for your message! I'll get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <ContentSection id="contact">
      <h2 className="text-white mb-2">Contact</h2>
      <h4 className="text-white mb-4">
        I'm always looking for new and interesting projects to collab on.
      </h4>
      <p className="text-white mb-8">
        Check out my projects on{" "}
        <a
          href="https://github.com/ryanbriggsdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          GitHub
        </a>
        .
      </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-600/30 p-8 rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none border-none focus:border-blue-500 bg-white"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none border-none focus:border-blue-500 bg-white"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none border-none focus:border-blue-500 bg-white"
            rows={4}
            placeholder="Your message here..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 disabled:bg-blue-300"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {submitFeedback && (
          <p className="text-green-500 text-center mt-4">{submitFeedback}</p>
        )}
      </form>
    </ContentSection>
  );
};

export default ContactForm;
