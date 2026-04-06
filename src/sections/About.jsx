import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import "./About.css";

export default function About({ t }) {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">{t.about.title}</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>

            <div className="about__languages">
              <h4>{t.about.languages}</h4>
              <ul>
                <li>🇫🇷 {t.about.french}</li>
                <li>🇬🇧 {t.about.english}</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="about__cards"
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about__card">
              <span className="about__card-icon">💻</span>
              <div>
                <strong>Concepteur Développeur d'Applications</strong>
                <p>Titre professionnel niveau 6 (Bac+3/4) — React, Node.js, JavaScript</p>
              </div>
            </div>
            <div className="about__card">
              <span className="about__card-icon">🏦</span>
              <div>
                <strong>5 ans en secteur bancaire</strong>
                <p>5 ans (agence & back-office) gestionnaire en assurances</p>
              </div>
            </div>
            <div className="about__card">
              <span className="about__card-icon">🏛️</span>
              <div>
                <strong>Direction du Développement Économique Nîmes Métropole</strong>
                <p>2 ans — Chargé d'implantation entreprise</p>
              </div>
            </div>
            <div className="about__card">
              <span className="about__card-icon">🎓</span>
              <div>
                <strong>Diplômes</strong>
                <p>Master Management International des Territoires et des Entreprises (spécialité statistiques)</p>
                <p>Licence Administration Économique et Sociale</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
