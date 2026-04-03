import "./index.css";
import { useTheme } from "./hooks/useTheme";
import { useLang } from "./hooks/useLang";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Rates from "./sections/Rates";
import Contact from "./sections/Contact";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
        t={t}
      />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Rates t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
