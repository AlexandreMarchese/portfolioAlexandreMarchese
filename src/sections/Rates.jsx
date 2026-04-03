import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Check } from "lucide-react";
import "./Rates.css";

export default function Rates({ t }) {
  const { ref, inView } = useInView();

  const features = [
    t.rates.feature1,
    t.rates.feature2,
    t.rates.feature3,
    t.rates.feature4,
    t.rates.feature5,
    t.rates.feature6,
  ];

  return (
    <section id="rates" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">{t.rates.title}</h2>
        </motion.div>

        <motion.div
          className="rates__card"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="rates__price-block">
            <p className="rates__label">{t.rates.tjm}</p>
            <div className="rates__price">
              <span className="rates__amount">{t.rates.price}</span>
              <span className="rates__unit">{t.rates.unit}</span>
            </div>
          </div>

          <div className="rates__divider" />

          <div className="rates__features">
            <p className="rates__features-title">{t.rates.includes}</p>
            <ul>
              {features.map((f) => (
                <li key={f}>
                  <Check size={16} strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="rates__note">{t.rates.note}</p>

          <a href="#contact" className="btn btn--primary rates__cta">
            {t.rates.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
