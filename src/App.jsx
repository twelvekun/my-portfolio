
import { useEffect, useState } from 'react';

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
import Services from './components/Services';

function App() {
  const [theme, setTheme] = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;
    

    const selectors = [
      'main > div',
      'main section',
      '.tools-box > *',
      '.proyek-box > *',
      '.tentang',
      '.tools',
      '.proyek',
      '.kontak',
      'header',
    ];

    const elements = document.querySelectorAll('.section-reveal');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;

            element.style.transition =
              'all 700ms cubic-bezier(.2,.9,.3,1)';

            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';

            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(16px) scale(0.98)';
      element.style.transitionDelay = `${(index % 8) * 60}ms`;

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div
      className={`min-h-screen w-full font-sans overflow-x-hidden transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#030712] via-[#0f172a] to-[#09090b] text-white'
          : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >
      <Background theme={theme} />

      <LoadingOverlay show={loading} />

      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero theme={theme} />

        <About theme={theme} />

        <TechStack theme={theme} />

        <Portfolio
          theme={theme}
          projects={listProyek}
        />

        <div id="layanan">
          <Services services={listServices} />
        </div>

        <Contact theme={theme} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
