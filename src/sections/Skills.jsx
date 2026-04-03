import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiCss,
  SiHtml5,
  SiVite,
  SiTailwindcss,
  SiSvelte,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import "./Skills.css";

const frontendSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "CSS / SCSS", icon: SiCss, color: "#1572B6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Svelte", icon: SiSvelte, color: "#FF3E00" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
];

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "REST APIs", icon: null, color: null },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

function SkillPill({ name, icon: Icon, color }) {
  return (
    <span className="skills__pill">
      {Icon && (
        <Icon
          className="skills__pill-icon"
          style={{ color }}
        />
      )}
      {name}
    </span>
  );
}

export default function Skills({ t }) {
  const { ref, inView } = useInView();

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">{t.skills.title}</h2>
        </motion.div>

        <div className="skills__grid">
          <motion.div
            className="skills__column"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="skills__group-title">{t.skills.frontend}</h3>
            <div className="skills__pills">
              {frontendSkills.map((s) => (
                <SkillPill key={s.name} {...s} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills__column"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="skills__group-title">{t.skills.backend}</h3>
            <div className="skills__pills">
              {backendSkills.map((s) => (
                <SkillPill key={s.name} {...s} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills__domains"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="skills__group-title">{t.skills.domains}</h3>
            <div className="skills__pills">
              {t.skills.domainList.map((d) => (
                <span key={d} className="skills__pill">{d}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
