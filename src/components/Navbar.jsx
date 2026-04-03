import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ theme, toggleTheme, lang, toggleLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#rates", label: t.nav.rates },
    { href: "#contact", label: t.nav.contact },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          AM<span className="navbar__logo-dot">.</span>
        </a>

        <ul className={`navbar__links${menuOpen ? " navbar__links--open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={handleNavClick}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            className="navbar__btn"
            onClick={toggleLang}
            aria-label="Switch language"
          >
            {lang === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
          </button>
          <button
            className="navbar__btn navbar__btn--icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className={`navbar__burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
