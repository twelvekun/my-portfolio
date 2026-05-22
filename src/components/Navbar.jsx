import { useState, useEffect, useRef } from 'react';
import { RiSunLine, RiMoonLine, RiMenuLine, RiCloseLine } from '@remixicon/react';

const ANIM_DURATION = 350;

const Navbar = ({ theme, setTheme }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThemeSwitch = () => {
    if (isAnimating) return;
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), ANIM_DURATION);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  // Fungsi untuk menangani Smooth Scroll
  const handleScroll = (e, href) => {
    e.preventDefault();
    
    // Menghilangkan tanda '#' untuk mendapatkan ID elemen
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Menentukan tinggi navbar (offset) agar konten tidak tertutup
      const navbarHeight = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Tutup menu mobile jika sedang terbuka
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'About', href: '#tentang' }, 
    { label: 'Tools', href: '#tools' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Kontak', href: '#kontak' }
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out transform ${
          !showNavbar ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-lg"></div>

        {/* Navbar Content */}
        <div className="relative flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={(e) => handleScroll(e, '#home')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
              SF
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sadad
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={handleThemeSwitch}
              className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:border-cyan-500/60 flex items-center justify-center transition-all duration-300 group"
              disabled={isAnimating}
              aria-label="Toggle theme"
            >
              <span className={`inline-flex items-center justify-center transition-all duration-300 ${isAnimating ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
                {theme === 'dark' ? (
                  <RiMoonLine size={20} className="text-purple-400" />
                ) : (
                  <RiSunLine size={20} className="text-yellow-400" />
                )}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:border-cyan-500/60 flex items-center justify-center transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <RiCloseLine size={20} className="text-cyan-400" />
              ) : (
                <RiMenuLine size={20} className="text-cyan-400" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden">
          <div className="bg-gradient-to-b from-black/80 via-black/70 to-transparent backdrop-blur-xl border-b border-cyan-500/20">
            <ul className="max-w-7xl mx-auto px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-300 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;