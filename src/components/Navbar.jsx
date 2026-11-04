import { useState } from 'react';
import { 
  RiSunLine, 
  RiMoonLine, 
  RiHome4Line, 
  RiUser3Line, 
  RiToolsLine, 
  RiBriefcase4Line, 
  RiCustomerService2Line, 
  RiContactsBook2Line 
} from '@remixicon/react';

const ANIM_DURATION = 350;

const Navbar = ({ theme, setTheme }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState('#home');

  const handleThemeSwitch = () => {
    if (isAnimating) return;
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), ANIM_DURATION);
  };

  // Fungsi untuk menangani Smooth Scroll
  const handleScroll = (e, href) => {
    e.preventDefault();
    setActiveTab(href);
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = window.innerWidth < 768 ? 90 : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Home', href: '#home', icon: RiHome4Line },
    { label: 'About', href: '#tentang', icon: RiUser3Line }, 
    { label: 'Tools', href: '#tools', icon: RiToolsLine },
    { label: 'Proyek', href: '#proyek', icon: RiBriefcase4Line },
    { label: 'Service', href: '#layanan', icon: RiCustomerService2Line },
    { label: 'Kontak', href: '#kontak', icon: RiContactsBook2Line }
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR (Top Bar) ================= */}
      <nav
      className="hidden md:block fixed top-0 left-0 right-0 z-50"
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
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group cursor-pointer ${
                    activeTab === item.href ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                    activeTab === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>

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
        </div>
      </nav>

      {/* ================= MOBILE EXPANDING TAB BAR ================= */}
<div
  className="md:hidden fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md"
>
  <div className="flex items-center justify-between gap-1 px-2 py-2
    bg-white/90 dark:bg-slate-900/90
    backdrop-blur-xl border border-slate-200 dark:border-cyan-500/30
    rounded-2xl shadow-xl">

    {/* Navigation items */}
    <div className="flex items-center justify-between flex-1 gap-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.href;

        return (
          <button
            key={item.label}
            onClick={(e) => handleScroll(e, item.href)}
            aria-label={item.label}
            className={`flex items-center justify-center gap-1.5
              h-10 rounded-xl overflow-hidden whitespace-nowrap
              transition-all duration-300 ease-in-out
              ${
                isActive
                  ? 'flex-[2] px-3 bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : 'flex-1 px-2 text-slate-500 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
          >
            <Icon size={20} className="shrink-0" />

            <span
              className={`text-xs font-semibold transition-all duration-300
                ${
                  isActive
                    ? 'max-w-24 opacity-100'
                    : 'max-w-0 opacity-0 overflow-hidden'
                }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>

    {/* Theme switch */}
    <button
      onClick={handleThemeSwitch}
      disabled={isAnimating}
      className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
        text-slate-700 dark:text-gray-200
        hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <RiMoonLine size={20} className="text-purple-400" />
      ) : (
        <RiSunLine size={20} className="text-yellow-500" />
      )}
    </button>
  </div>
</div>
    </>
  );
};

export default Navbar;