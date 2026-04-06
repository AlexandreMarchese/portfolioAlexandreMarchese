import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Send } from "lucide-react";
import "./Contact.css";

export default function Contact({ t }) {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Remplace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY par tes identifiants EmailJS
      const emailjs = await import("emailjs-com");
      await emailjs.default.send(
        "service_jpin4kq",
        "template_4ps1ffi",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "rpXJNtoFEt9Pe3F6d"
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="name">{t.contact.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t.contact.namePlaceholder}
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">{t.contact.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t.contact.emailPlaceholder}
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="message">{t.contact.message}</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder={t.contact.messagePlaceholder}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn--primary contact__submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              t.contact.sending
            ) : (
              <>
                <Send size={16} />
                {t.contact.send}
              </>
            )}
          </button>

          {status === "success" && (
            <p className="contact__feedback contact__feedback--success">
              {t.contact.success}
            </p>
          )}
          {status === "error" && (
            <p className="contact__feedback contact__feedback--error">
              {t.contact.error}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
