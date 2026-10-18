"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// EmailJS IDs are public client keys; override them in .env.local if needed.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_2byfh77";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_00bawh3";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "user_cpHL9AMxxDTd04TMbXUql";

const contactInfo = [
  { Icon: Phone, label: "Phone", value: "01783850584", href: "tel:+8801783850584" },
  { Icon: Mail, label: "Email", value: "monaimmukul75@gmail.com", href: "mailto:monaimmukul75@gmail.com" },
  { Icon: MapPin, label: "Location", value: "Rampura, Dhaka" },
];

const inputClass =
  "w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-primary transition-colors";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY });
      toast.success("Message sent successfully! I'll get back to you soon.", { theme: "dark" });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please email me directly instead.", { theme: "dark" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-bg scroll-mt-4">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="container mx-auto px-4 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-8 border-b border-white/20 pb-4">
            Get In Touch
          </h2>
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <label className="sr-only" htmlFor="user_name">Name</label>
            <input id="user_name" type="text" placeholder="Name" name="user_name" required className={inputClass} />
            <label className="sr-only" htmlFor="user_email">Email</label>
            <input id="user_email" type="email" placeholder="Email" name="user_email" required className={inputClass} />
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              rows="6"
              name="message"
              required
              minLength={10}
              className={`${inputClass} resize-none`}
            ></textarea>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-white py-3 rounded font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-black/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 text-white flex flex-col justify-center gap-4">
          <p className="text-gray-400 text-lg mb-2">
            Prefer to reach out directly? I usually reply within a day.
          </p>
          {contactInfo.map(({ Icon, label, value, href }) => {
            const content = (
              <>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </span>
                <span>
                  <span className="block text-sm text-gray-400">{label}</span>
                  <span className="block text-lg md:text-xl font-semibold break-all">{value}</span>
                </span>
              </>
            );
            return href ? (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 rounded-xl p-4 border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-colors"
              >
                {content}
              </a>
            ) : (
              <div key={label} className="flex items-center gap-4 rounded-xl p-4 border border-white/5">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
