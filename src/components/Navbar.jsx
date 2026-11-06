
import { useState } from 'react';

import {
  RiSunLine,
  RiMoonLine,
  RiHome4Line,
  RiUser3Line,
  RiToolsLine,
  RiBriefcase4Line,
  RiCustomerService2Line,
  RiContactsBook2Line,
  RiMenu3Line,
  RiCloseLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiInstagramFill,
} from '@remixicon/react';

const ANIM_DURATION = 350;

const Navbar = ({
  theme,
  setTheme,
  menuOpen,
  setMenuOpen,
  isHeaderOnly,
  isNavbarVisible = true,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState('#home');

  const handleThemeSwitch = () => {
    if (isAnimating) return;

    const next = theme === 'dark' ? 'light' : 'dark';

    setTheme(next);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, ANIM_DURATION);
  };

  const handleScroll = (e, href) => {
    e.preventDefault();

    setActiveTab(href);
    setMenuOpen(false);

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 100;

      const elementPosition =
        targetElement.getBoundingClientRect().top;

      const offsetPosition =
        elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
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

  // HEADER
  if (isHeaderOnly) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-40
        transition-transform duration-700 ease-in-out ${
          menuOpen
            ? 'translate-x-full lg:translate-x-1/2'
            : 'translate-x-0'
        }`}
      >
        <div
          className={`transition-transform duration-500 ease-in-out ${
            isNavbarVisible
              ? 'translate-y-0'
              : '-translate-y-full'
          } ${
            theme === 'dark'
              ? 'bg-amber-950 border-amber-950'
              : 'bg-amber-100 border-amber-100'
          } backdrop-blur-md border-b`}
        >
          <div className="flex items-center justify-between
          px-5 md:px-12 py-4 max-w-7xl mx-auto w-full">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex items-center gap-2 px-4 py-2
              rounded-lg font-semibold text-sm transition-all ${
                theme === 'dark'
                  ? 'text-white'
                  : 'text-neutral-900'
              }`}
              aria-label="Toggle Menu"
            >
              {menuOpen
                ? <RiCloseLine size={20} />
                : <RiMenu3Line size={20} />
              }

              <span>Menu</span>
            </button>

            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={(e) => handleScroll(e, '#home')}
            >
              <div className="w-10 h-10 rounded-lg
              bg-gradient-to-br from-amber-500 to-yellow-600
              flex items-center justify-center text-white
              font-bold shadow-md">
                SF
              </div>
            </div>

          </div>
        </div>
      </header>
    );
  }

  // SIDEBAR
  return (
    <>
      <div
        className={`fixed inset-0 z-50
        w-full lg:w-1/2
        ${
          theme === 'dark'
            ? 'bg-amber-950 text-amber-100'
            : 'bg-amber-100 text-neutral-900'
        }
        shadow-2xl
        px-7 py-6
        sm:px-10 sm:py-8
        lg:px-12 lg:py-6
        xl:px-16 xl:py-8
        flex flex-col
        transition-transform duration-700 ease-in-out
        ${
          menuOpen
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >

        {/* TOP HEADER + CLOSE BUTTON */}
        <div className="flex items-center justify-end
        shrink-0 mb-5 lg:mb-3">

          <button
            onClick={() => setMenuOpen(false)}
            className={`p-2 rounded-full transition-all duration-300
            ${
              theme === 'dark'
                ? 'bg-black/10 hover:bg-black/25'
                : 'bg-amber-200/60 hover:bg-amber-300'
            }`}
            aria-label="Close menu"
            title="Close menu"
          >
            <RiCloseLine
              size={21}
              className="lg:w-5 lg:h-5"
            />
          </button>

        </div>

        {/* NAVIGATION ITEMS */}
        <nav className="flex-1 min-h-0 overflow-y-auto
        overscroll-contain">

          <ul className="space-y-2 sm:space-y-3 lg:space-y-1.5
          xl:space-y-2">

            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === item.href;

              return (
                <li key={item.label}>

                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`flex items-center
                    gap-5 sm:gap-7 lg:gap-5
                    px-5 py-3 sm:px-7 sm:py-4
                    lg:px-6 lg:py-3
                    xl:px-8 xl:py-3.5
                    rounded-2xl font-semibold
                    transition-all duration-300
                    ${
                      isActive
                        ? (
                            theme === 'dark'
                              ? 'bg-white text-amber-950 shadow-md'
                              : 'bg-amber-600 text-white shadow-md'
                          )
                        : (
                            theme === 'dark'
                              ? 'hover:bg-amber-900/40 text-amber-100'
                              : 'hover:bg-amber-200/65 text-neutral-900'
                          )
                    }`}
                  >

                    <Icon
                      className="w-7 h-7 sm:w-8 sm:h-8
                      lg:w-6 lg:h-6 xl:w-7 xl:h-7 shrink-0"
                    />

                    <span className="text-xl sm:text-2xl
                    lg:text-xl xl:text-2xl">
                      {item.label}
                    </span>

                    <span className="ml-auto text-sm
                    lg:text-xs xl:text-sm opacity-40">
                      0{index + 1}
                    </span>

                  </a>

                </li>
              );
            })}

          </ul>
          {/* SOCIAL MEDIA */}
<div className="mt-5 lg:mt-4 pt-5 lg:pt-4
border-t border-amber-500/20">

  <p className="text-xs uppercase tracking-[0.2em]
  opacity-50 mb-4">
    Find Me On
  </p>

  <div className="flex items-center gap-5">

    {/* LINKEDIN */}
    <a
      href="https://www.linkedin.com/in/ahmadsadadfathoni"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="opacity-70 hover:opacity-100
      hover:scale-110 transition-all duration-300"
    >
      <RiLinkedinBoxFill size={25} />
    </a>

    {/* GITHUB */}
    <a
      href="https://github.com/twelvekun"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="opacity-70 hover:opacity-100
      hover:scale-110 transition-all duration-300"
    >
      <RiGithubFill size={25} />
    </a>

    {/* INSTAGRAM */}
    <a
      href="https://www.instagram.com/sadad_fath"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="opacity-70 hover:opacity-100
      hover:scale-110 transition-all duration-300"
    >
      <RiInstagramFill size={25} />
    </a>

  </div>
</div>

        </nav>

        {/* THEME SWITCH */}
        <div className="shrink-0 pt-5 lg:pt-4
        border-t border-amber-500/20
        flex items-center justify-between gap-4">

          <div>
            <span className="block text-lg sm:text-xl
            lg:text-base xl:text-lg font-semibold">
              Mode Tampilan
            </span>

            <span className="text-sm lg:text-xs xl:text-sm opacity-60">
              Customize your experience
            </span>
          </div>

          <button
            onClick={handleThemeSwitch}
            disabled={isAnimating}
            className={`shrink-0 flex items-center
            justify-center p-3 lg:p-2.5
            rounded-full border transition-all duration-300
            ${
              theme === 'dark'
                ? 'border-amber-700 bg-amber-900/40 hover:bg-amber-900 text-white'
                : 'border-amber-300 bg-amber-200/60 hover:bg-amber-200 text-neutral-900'
            }`}
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              theme === 'dark'
                ? 'Light Mode'
                : 'Dark Mode'
            }
          >
            {theme === 'dark' ? (
              <RiSunLine
                size={23}
                className="text-amber-300"
              />
            ) : (
              <RiMoonLine
                size={23}
                className="text-amber-800"
              />
            )}
          </button>

        </div>

      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30
          bg-black/40 backdrop-blur-xs"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
