import { ArrowDown, Mail } from "lucide-react";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import { motion } from "framer-motion";
import "./Hero.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero({ t }) {
  return (
    <section id="hero" className="hero">
      <div className="container hero__content">
        <motion.div className="hero__photo-wrapper" {...fadeUp(0)}>
          <div className="hero__photo">
            <img src="/photo.jpg" alt="Alexandre Marchese" />
          </div>
        </motion.div>

        <motion.p className="hero__greeting" {...fadeUp(0.1)}>
          {t.hero.greeting}
        </motion.p>

        <motion.h1 className="hero__name" {...fadeUp(0.2)}>
          {t.hero.name}
        </motion.h1>

        <motion.p className="hero__title" {...fadeUp(0.3)}>
          {t.hero.title}
        </motion.p>

        <motion.p className="hero__subtitle" {...fadeUp(0.4)}>
          {t.hero.subtitle}
        </motion.p>

        <motion.div className="hero__actions" {...fadeUp(0.5)}>
          <a href="#projects" className="btn btn--primary">
            {t.hero.cta}
          </a>
          <a href="#contact" className="btn btn--secondary">
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div className="hero__socials" {...fadeUp(0.6)}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:alexandre.marchese@email.com"
            className="hero__social-link"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
