import { Heart, Code } from "lucide-react";
import "./Footer.css";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Alexandre Marchese — {t.footer.rights}
        </p>
        <p className="footer__made">
          {t.footer.made} <Heart size={13} fill="currentColor" /> {t.footer.and} <Code size={13} />
        </p>
      </div>
    </footer>
  );
}
