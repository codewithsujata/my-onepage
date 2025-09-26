"use client"; // Client-side rendering

import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Simulate API call (timeout)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("Message sent successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 sm:p-12 rounded-xl">
          {/* Contact Info Section */}
          <div className="flex flex-col justify-center items-start space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Feel free to contact us! We are here to assist you with any queries or concerns.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 5-3 9-7 9-1.93 0-3.69-.66-5.01-1.77-.75-.53-1.65-1.29-2.28-2.02C6.33 14.14 5 12.31 5 10c0-5 3-9 7-9s7 4 7 9z"></path>
                </svg>
                <span className="ml-3 text-gray-700">info@company.com</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18V3H3zm8 14l5-5h-3V7h-4v5H7l5 5z"></path>
                </svg>
                <span className="ml-3 text-gray-700">123 Main Street, City, Country</span>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="mt-6 w-full">
              <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.236783637391!2d-122.4194154846815!3d37.77492977975978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5a5a6e6f%3A0xfcd90b1a6ed4f2d!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1695802400000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-lg font-medium text-gray-800">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-lg font-medium text-gray-800">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-lg font-medium text-gray-800">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-4 bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-orange-700 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </form>
            {status && (
              <div className="mt-4 text-center text-green-600 font-medium">
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
