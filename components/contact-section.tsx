"use client"

import type React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Debug: log env variables
    console.log(
      "Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      "Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      "Public Key:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitMessage("✅ Your message was sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: unknown) {
      if (error && typeof error === "object" && "message" in error) {
        setSubmitMessage(`❌ Failed to send message: ${(error as { message: string }).message}`);
      } else {
        setSubmitMessage("❌ Failed to send message: Unknown error");
      }
    }
  }

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-white/80">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="text-white/80 text-sm font-medium mb-1 block">
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 placeholder-white/50 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white/80 text-sm font-medium mb-1 block">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 placeholder-white/50 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="text-white/80 text-sm font-medium mb-1 block">
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Message subject"
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 placeholder-white/50 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="text-white/80 text-sm font-medium mb-1 block">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 placeholder-white/50 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-400 hover:to-pink-600 text-white py-3 rounded-full font-medium transition"
              >
                {isSubmitting ? "Sending..." : <>Send Message <Send size={16} /></>}
              </button>

              {/* Message */}
              {submitMessage && (
                <p className="mt-4 text-green-400 text-sm bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-lg">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-white/20 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="mt-1 text-white/80">syedsahirali639@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Call</h4>
                  <p className="mt-1 text-white/80">+92 321 3574864</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="mt-1 text-white/80">Karachi,</p>
                  <p className="text-white/80">Pakistan</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12">
              <h4 className="font-semibold mb-4">Follow Us</h4>

              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/sahirali456"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.55-3.87-1.55-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.79 2.74 1.27 3.41.97.1-.77.41-1.27.75-1.56-2.56-.3-5.26-1.28-5.26-5.68 0-1.25.44-2.27 1.16-3.07-.12-.29-.5-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.98 0 1.97.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.61 1.57.24 2.73.12 3.02.72.8 1.15 1.82 1.15 3.07 0 4.41-2.7 5.37-5.28 5.67.42.36.8 1.07.8 2.15v3.19c0 .31.21.66.8.55A10.98 10.98 0 0 0 23.5 12c0-6.28-5.22-11.5-11.5-11.5Z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:syedsahirali639@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.4 4.25L12 13 5.4 8.25l-.9 1.2L12 15l7.5-5.55-.9-1.2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/sahir-ali-65380a33a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2h-3v-6.3c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.8 1.3-.1.2-.1.5-.1.7V21h-3s.04-11.5 0-12.7h3v1.8c.4-.6 1.2-1.4 2.9-1.4 2.1 0 3.7 1.4 3.7 4.5V21h0ZM5.3 8.3A1.7 1.7 0 1 1 5.3 5a1.7 1.7 0 0 1 0 3.3ZM7 21H3.5V8.3H7V21Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
