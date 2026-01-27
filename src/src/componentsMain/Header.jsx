import "./Header.css";
const navLinks = [
  { title: "home", href: "/#" },
  { title: "features", href: "/#features" },
  { title: "functionality", href: "#func" },
  { title: "users", href: "#users" },
  { title: "contact", href: "#contact" },
  { title: "userName" },
];
function Header() {
  return (
    <header className="header">
      <div className="header-logo">tasker</div>
      <nav className="header-nav">
        {navLinks.map((link) => (
          <a key={link.title} href={link.href}>
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
