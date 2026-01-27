import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const navItems = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Scroll listener for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (let id of navItems) {
        const section = document.getElementById(id);
        if (section && scrollPos >= section.offsetTop) {
          setActive(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16 bg-[var(--bg)]/70 backdrop-blur-xl border-b border-[var(--border)] transition-colors duration-500">
        
        {/* Logo */}
        <span className="font-bold text-lg cursor-pointer text-[var(--text)]">
          Rafi<span className="text-[var(--accent)]">.</span>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative capitalize text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-all duration-300 ${
                active === item ? "font-bold text-[var(--accent)]" : ""
              }`}
            >
              {item}
              {/* Active underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--accent)] transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg border border-[var(--border)] hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg border border-[var(--border)] hover:bg-[var(--accent)] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-16 left-0 w-full bg-[var(--bg)] dark:bg-[var(--bg)]/95 backdrop-blur-lg flex flex-col gap-4 p-6 md:hidden border-t border-[var(--border)]">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMobileOpen(false)}
                className={`capitalize text-lg font-medium text-[var(--text)] hover:text-[var(--accent)] transition ${
                  active === item ? "font-bold text-[var(--accent)]" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
