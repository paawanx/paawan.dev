import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoLight from '../assets/images/logo-light.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={logoLight} alt="Paawan Srivastava" className="h-8 w-auto" />
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Get in touch
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Drawer panel */}
            <div className="fixed top-0 right-0 bottom-0 w-[280px] bg-card shadow-lg md:hidden z-50 animate-slide-in-right">
              <div className="flex flex-col h-full px-6 py-8">
                {/* Header with logo and close button */}
                <div className="flex items-center justify-between mb-8">
                  <img src={logoLight} alt="Paawan Srivastava" className="h-8 w-auto" />
                  <button
                    className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg active:bg-muted"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation items */}
                <nav className="flex-1">
                  <ul className="space-y-1">
                    {navItems.map((item, index) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block py-3 px-4 text-base font-medium text-foreground hover:bg-accent rounded-lg transition-colors active:bg-accent/80 border-b border-border/30 last:border-0"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Button at bottom */}
                <div className="pt-6 border-t border-border/30">
                  <a
                    href="#contact"
                    className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg shadow-md hover:bg-primary/90 transition-colors active:bg-primary/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
