import { useEffect, useState, useRef } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/footer';

import useTheme from './hooks/useTheme';

import LoadingOverlay from './components/sections/LoadingOverlay';
import Background from './components/sections/Background';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';

import { listProyek, listServices } from './data';
import Services from './components/sections/Services';

function App() {
  const [theme, setTheme] = useTheme();
 const [loading, setLoading] = useState(true);
const loadingTimer = useRef(null);
const isMobile = useRef(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);
  
 
 useEffect(() => {
  let previousScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const difference = currentScrollY - previousScrollY;

    if (currentScrollY <= 80) {
      setIsNavbarVisible(true);
    } else if (difference > 5) {
      setIsNavbarVisible(false);
    } else if (difference < -5) {
      setIsNavbarVisible(true);
    }

    previousScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

useEffect(() => {
  if (menuOpen) {
    setIsNavbarVisible(true);
  }
}, [menuOpen]);

  
useEffect(() => {
  // Deteksi ukuran layar awal
  isMobile.current = window.innerWidth < 768;

  // Loading pertama kali dan setiap refresh
  setLoading(true);

  loadingTimer.current = setTimeout(() => {
    setLoading(false);
  }, 5000);

  // Deteksi perubahan ukuran layar
  const handleResize = () => {
    const currentIsMobile = window.innerWidth < 768;

    // Hanya jalankan jika berpindah breakpoint
    if (currentIsMobile !== isMobile.current) {
      isMobile.current = currentIsMobile;

      // Tampilkan kembali overlay
      setLoading(true);

      // Reset timer sebelumnya
      clearTimeout(loadingTimer.current);

      loadingTimer.current = setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };

  window.addEventListener('resize', handleResize);

  return () => {
    clearTimeout(loadingTimer.current);
    window.removeEventListener('resize', handleResize);
  };
}, []);


  useEffect(() => {
    if (loading) return;

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;
    
    const elements = document.querySelectorAll('.section-reveal');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;

            element.style.transition =
              'opacity 600ms ease, transform 600ms ease';

            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';

            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.12 }
    );

    
elements.forEach((element) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(12px)';

  element.style.transitionDelay = '0ms';

  observer.observe(element);
});


    return () => observer.disconnect();
  }, [loading]);

 return (
  <div
    className={`min-h-screen w-full font-sans overflow-x-hidden
      transition-colors duration-500 relative ${
        theme === 'dark'
          ? 'bg-amber-950 text-amber-50'
          : 'bg-amber-100 text-neutral-950'
      }`}
  >
    <Background theme={theme} />

    <LoadingOverlay show={loading} />

    {/* Sidebar: tetap di sisi kiri */}
    <Navbar
      theme={theme}
      setTheme={setTheme}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
    />

    {/* Header: fixed, terpisah dari wrapper content */}
    <Navbar
      theme={theme}
      setTheme={setTheme}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      isHeaderOnly={true}
      isNavbarVisible={isNavbarVisible}
    />

    {/* Semua konten website bergeser saat sidebar dibuka */}
    <div
  className={`transition-transform duration-700 ease-in-out ${
    menuOpen
      ? 'translate-x-full lg:translate-x-1/2'
      : 'translate-x-0'
  }`}
>
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <TechStack theme={theme} />

        <Portfolio
          theme={theme}
          projects={listProyek}
        />

        <div id="layanan">
  <Services
    services={listServices}
    theme={theme}
  />
</div>

        <Contact theme={theme} />
      </main>

      <Footer theme={theme} />
    </div>
  </div>
);
}

export default App;