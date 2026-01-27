import "./Footer.css";

import git from "./images/git.png";
import link from "./images/link.png";
import face from "./images/face.png";
import insta from "./images/inst.png";
import ytb from "./images/you.png";

const navLinks = [
  { title: "home", href: "/" },
  { title: "features", href: "#features" },
  { title: "functionality", href: "#func" },
  { title: "users", href: "#users" },
  { title: "contact", href: "#contact" },
  { title: "sign in", href: "/signin" },
];

const socialIcons = [
  { src: git, alt: "github" },
  { src: link, alt: "linkedin" },
  { src: face, alt: "facebook" },
  { src: insta, alt: "instagram" },
  { src: ytb, alt: "youtube" },
];

const footerItems = [
  { title: "Address", content: "#27 Rue de la Technologie, Tunis 1082" },
  { title: "Email", content: "contact@tasker.com" },
  { title: "Phone", content: "+99 999 999" },
];

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        {navLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.title}
          </a>
        ))}
      </nav>

      <div className="footer-content">
        <div className="footer-about">
          <h3 className="footer-h3">A Little More About Us</h3>
          <p>
            Our mission is to simplify task management by providing a clear,
            visual, and flexible tool that adapts to different workflows and
            helps users work more efficiently.
          </p>
        </div>

        <div className="footer-items">
          {footerItems.map((item, index) => (
            <div className="footer-item" key={index}>
              <h4 className="footer-item-h4">{item.title}</h4>
              <p className="footer-item-p">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="footer-socials">
          {socialIcons.map((icon, index) => (
            <img key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">tasker</div>
        <div className="footer-copy" id="contact">
          Copyright© 2026 . All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
