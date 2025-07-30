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

      try {
        // Using Formspree for actual form submission
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('message', formData.message);
        
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          body: formDataToSend,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          setIsSubmitting(false);
          setSubmitFeedback(
            "Thank you for your message! I'll get back to you soon."
          );
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        setIsSubmitting(false);
        setSubmitFeedback(
          "Sorry, there was an error sending your message. Please email me directly at ryan@ryanbriggs.dev"
        );
      }
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
        . Or{" "}
        <a
          href="mailto:ryan@ryanbriggs.dev"
          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          email me directly
        </a>
        .
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://github.com/ryanbriggsdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/ryanbriggsdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="mailto:ryan@ryanbriggs.dev"
          className="text-gray-300 hover:text-white transition-colors duration-300"
          aria-label="Email"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.682l10.682 8.01L24 3.821v1.636z"/>
          </svg>
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-600/30 p-8 rounded-lg backdrop-blur-sm"
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
