import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
import "./Projects.css";

// Tu ajouteras tes projets ici plus tard
const projects = [];

export default function Projects({ t }) {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">{t.projects.title}</h2>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            className="projects__soon"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="projects__soon-icon">🚀</div>
            <h3>{t.projects.soon}</h3>
            <p>{t.projects.soonDesc}</p>
          </motion.div>
        ) : (
          <div className="projects__grid">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              >
                {project.image && (
                  <div className="project-card__img">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon /> {t.projects.viewCode}
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} /> {t.projects.viewDemo}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
