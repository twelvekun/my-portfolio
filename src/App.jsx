import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DataImage, { listProyek, listServices } from './data';
import useTheme from './hooks/useTheme';
import { listTools } from "./data";
import Footer from './components/footer';
import PokerCards from './components/PokerCards';
import Services from './components/Services';

// Loading overlay
function LoadingOverlay({ show }) {
  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-cyan-500 border-r-purple-500 animate-spin"></div>
        <div className="text-sm text-gray-400">Loading...</div>
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useTheme();

  // Loading state untuk animasi masuk
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Contoh durasi loading: 700ms (ubah sesuai kebutuhan)
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  // Scroll-triggered animations (IntersectionObserver)
  useEffect(() => {
    // Hormati prefer-reduced-motion
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Delay menjalankan observer sampai loading selesai agar tidak memicu terlalu awal
    const runObserver = () => {
      // Pilih elemen konten yang ingin dianimasikan tanpa mengubah struktur JSX.
      // Kita akan target elemen-elemen blok utama: sections dan beberapa kontainer.
      const selectors = ['main > div', 'main section', '.tools-box > *', '.proyek-box > *', '.tentang', '.tools', '.proyek', '.kontak', 'header'];
      const els = Array.from(document.querySelectorAll(selectors.join(','))).filter(Boolean);
      if (els.length === 0) return;

      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // apply transition
            el.style.transition = el.style.transition || 'all 700ms cubic-bezier(.2,.9,.3,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.12 });

      els.forEach((el, i) => {
        // jangan mengubah kolom kanan gambar (jaga selector agar tidak termasuk)
        // kita cek apakah elemen mengandung CardHover, jika iya, skip (agar kolom kanan tidak diubah)
        if (el.querySelector && el.querySelector('img') && el.querySelector('.relative')) {
          // heuristik sederhana: tetap animasikan, tapi jangan merubah struktur
        }

        el.style.opacity = '0';
        el.style.transform = 'translateY(16px) scale(0.98)';
        // stagger kecil berdasarkan index
        el.style.transitionDelay = `${(i % 8) * 60}ms`;
        obs.observe(el);
      });

      // disconnect saat unmount
      return () => obs.disconnect();
    };

    // Jika loading masih true, tunggu sampai selesai
    if (!loading) {
      const cleanup = runObserver();
      return cleanup;
    } else {
      // kalau masih loading, jalankan setelah loading false
      const id = setTimeout(() => runObserver(), 750);
      return () => clearTimeout(id);
    }
  }, [loading]);

  return (
    <div className={`min-h-screen w-full font-sans overflow-x-hidden transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white'
        : 'bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-900'
    }`}>
      {/* Background Gradient Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {theme === 'dark' ? (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </>
        ) : (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </>
        )}
      </div>

      <LoadingOverlay show={loading} />

      <Navbar theme={theme} setTheme={setTheme} />

      {/* Hero Section */}
      <div id="home" className="relative pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Kolom Kiri */}
            <div className="space-y-6">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md w-fit border ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30'
                  : 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border-cyan-400/40'
              }`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500'}`}></div>
                <span className={`text-sm ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}`}>Full Stack Developer</span>
              </div>

              {/* Heading */}
              <div>
                <h1 className="text-6xl lg:text-7xl font-black mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Sadad Fathoni
                  </span>
                </h1>
                <p className={`text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Crafting beautiful, modern web experiences with cutting-edge technology
                </p>
              </div>

              {/* Description */}
              <p className={`leading-relaxed text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Passionate Full Stack Developer dengan expertise di ReactJS, NextJS, dan Node.js. Siap mengubah ide menjadi digital reality yang memukau.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <a href="#" className={`group relative px-8 py-3 rounded-lg font-semibold overflow-hidden ${theme === 'dark' ? '' : 'text-white'}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"></div>
                  <div className={`absolute inset-0.5 rounded-lg group-hover:bg-opacity-50 transition-all duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}></div>
                  <span className={`relative flex items-center gap-2 group-hover:text-cyan-300 transition-colors ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
                    Download CV <i className="ri-download-2-fill"></i>
                  </span>
                </a>
                <a href={`#`} className={`group relative px-8 py-3 rounded-lg font-semibold border transition-all duration-300 backdrop-blur-sm flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10'
                    : 'border-cyan-500 hover:border-cyan-600 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50'
                }`}>
                  Lihat Proyek <i className="ri-arrow-right-line"></i>
                </a>
              </div>

              {/* Stats */}
              <div className={`grid grid-cols-3 gap-4 pt-8 border-t ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-400/30'}`}>
                <div>
                  <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>25+</div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Proyek</p>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>4+</div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Tahun</p>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>100%</div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Dedikasi</p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan - Poker Cards */}
            <div className="hidden lg:flex justify-center">
              <PokerCards images={[DataImage.HeroImage, DataImage.HeroImage2, DataImage.HeroImage3]} maxCards={3} />
            </div>
          </div>
        </div>
      </div>

      {/* Poker Cards Section - Mobile Only (Below Hero) */}
      <section className="lg:hidden relative py-10 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <PokerCards images={[DataImage.HeroImage, DataImage.HeroImage2, DataImage.HeroImage3]} maxCards={3} />
          </div>
        </div>
      </section>

      {/* Section Tentang */}
      <section id="tentang" className="relative py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold">
              <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-400 to-purple-500' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
                About Us
              </span>
            </h1>
          </div>

          <div className="group relative">
            {/* Gradient Border */}
            <div className={`absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-600/50 to-purple-600/50'
                : 'bg-gradient-to-r from-cyan-400/50 to-purple-400/50'
            }`}></div>

            <div className={`relative backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-cyan-500/20 group-hover:border-cyan-500/50'
                : 'bg-gradient-to-br from-cyan-100/30 to-purple-100/30 border-cyan-400/30 group-hover:border-cyan-400/60'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-center">
                {/* Kolom Kiri - Gambar (Desktop Only) */}
                <div className="hidden lg:flex lg:col-span-2 items-center justify-start p-6 lg:p-8">
                  <img
                    src={DataImage.AboutImage}
                    alt="About"
                    className="w-full h-auto object-cover rounded-lg max-w-sm"
                    loading="lazy"
                  />
                </div>

                {/* Kolom Kanan - Konten */}
                <div className="lg:col-span-3 p-8 md:p-12 space-y-8">
                  <h1 className="text-4xl font-bold">
              <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-400 to-purple-500' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
                Introducing Myself
              </span>
            </h1>
                  <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Saya adalah seorang Full Stack Developer dengan passion dalam menciptakan pengalaman digital yang luar biasa. Dengan pengalaman lebih dari 4 tahun, saya telah membantu berbagai klien mengembangkan website dan aplikasi mobile yang tidak hanya indah secara visual tetapi juga optimal dalam performa.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4 group/stat cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/stat:scale-110 transition-transform ${
                          theme === 'dark'
                            ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30'
                            : 'bg-gradient-to-br from-cyan-400/30 to-blue-400/30'
                        }`}>
                          <i className={`ri-code-line text-2xl ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}></i>
                        </div>
                        <div>
                          <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>25+</h3>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Proyek Selesai</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 group/stat cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/stat:scale-110 transition-transform ${
                          theme === 'dark'
                            ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30'
                            : 'bg-gradient-to-br from-purple-400/30 to-pink-400/30'
                        }`}>
                          <i className={`ri-timeline-line text-2xl ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}></i>
                        </div>
                        <div>
                          <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>4+</h3>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Tahun Pengalaman</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 group/stat cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/stat:scale-110 transition-transform ${
                          theme === 'dark'
                            ? 'bg-gradient-to-br from-blue-500/30 to-cyan-500/30'
                            : 'bg-gradient-to-br from-blue-400/30 to-cyan-400/30'
                        }`}>
                          <i className={`ri-team-line text-2xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}></i>
                        </div>
                        <div>
                          <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>100+</h3>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Klien Puas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tools Section */}
      <section id="tools" className="relative py-20 px-5">
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .carousel-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          .carousel-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
        `}</style>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-400 to-purple-500' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
                Tech Stack
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Tools dan teknologi yang saya gunakan untuk membangun solusi web yang powerful
            </p>
          </div>

          <div className="relative">
            {/* First Row - Scroll Left */}
            <div className="mb-8 overflow-hidden">
              <div className="carousel-scroll-left flex gap-4" style={{ width: 'fit-content' }}>
                {[...listTools, ...listTools].map((tool, idx) => (
                  <div
                    key={`left-${idx}`}
                    className="group relative overflow-hidden rounded-xl cursor-pointer flex-shrink-0 w-40"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 backdrop-blur-md group-hover:transition-all group-hover:duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20'
                        : 'bg-gradient-to-br from-cyan-400/10 to-purple-400/10 group-hover:from-cyan-400/20 group-hover:to-purple-400/20'
                    }`}></div>

                    {/* Border Gradient */}
                    <div className={`absolute inset-0 rounded-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border-cyan-500/20 group-hover:border-cyan-500/50'
                        : 'border-cyan-400/30 group-hover:border-cyan-400/60'
                    }`}></div>

                    {/* Content */}
                    <div className={`relative p-6 flex flex-col items-center justify-center h-full min-h-[160px] group-hover:scale-105 transition-transform duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      <img
                        src={tool.gambar}
                        alt={tool.ket}
                        className="w-16 h-16 mb-3 object-contain filter group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <h4 className={`font-semibold text-center text-sm group-hover:transition-colors group-hover:duration-300 ${
                        theme === 'dark'
                          ? 'group-hover:text-cyan-300'
                          : 'group-hover:text-cyan-600'
                      }`}>
                        {tool.ket}
                      </h4>
                    </div>

                    {/* Glow Effect on Hover */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5'
                        : 'bg-gradient-to-br from-cyan-400/5 to-purple-400/5'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Scroll Right */}
            <div className="overflow-hidden">
              <div className="carousel-scroll-right flex gap-4" style={{ width: 'fit-content' }}>
                {[...listTools].reverse().map((tool, idx) => (
                  <div
                    key={`right-${idx}`}
                    className="group relative overflow-hidden rounded-xl cursor-pointer flex-shrink-0 w-40"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 backdrop-blur-md group-hover:transition-all group-hover:duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20'
                        : 'bg-gradient-to-br from-cyan-400/10 to-purple-400/10 group-hover:from-cyan-400/20 group-hover:to-purple-400/20'
                    }`}></div>

                    {/* Border Gradient */}
                    <div className={`absolute inset-0 rounded-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border-cyan-500/20 group-hover:border-cyan-500/50'
                        : 'border-cyan-400/30 group-hover:border-cyan-400/60'
                    }`}></div>

                    {/* Content */}
                    <div className={`relative p-6 flex flex-col items-center justify-center h-full min-h-[160px] group-hover:scale-105 transition-transform duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      <img
                        src={tool.gambar}
                        alt={tool.ket}
                        className="w-16 h-16 mb-3 object-contain filter group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <h4 className={`font-semibold text-center text-sm group-hover:transition-colors group-hover:duration-300 ${
                        theme === 'dark'
                          ? 'group-hover:text-cyan-300'
                          : 'group-hover:text-cyan-600'
                      }`}>
                        {tool.ket}
                      </h4>
                    </div>

                    {/* Glow Effect on Hover */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5'
                        : 'bg-gradient-to-br from-cyan-400/5 to-purple-400/5'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyek Section */}
      <section id="proyek" className="relative py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-400 to-purple-500' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
                Portfolio
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Lihat beberapa proyek terbaik yang telah saya kerjakan dengan berbagai teknologi
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="group relative overflow-hidden rounded-xl"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-600/50 to-purple-600/50'
                    : 'bg-gradient-to-r from-cyan-400/50 to-purple-400/50'
                }`}></div>

                {/* Card Content */}
                <div className={`relative backdrop-blur-xl border group-hover:border-cyan-500/50 rounded-xl overflow-hidden transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border-cyan-500/20'
                    : 'bg-gradient-to-br from-cyan-100/30 to-purple-100/30 border-cyan-400/30'
                }`}>
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={proyek.gambar}
                      alt={proyek.nama}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-t from-black/80 via-transparent to-transparent'
                        : 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                    }`}></div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 space-y-4">
                    <h3 className={`text-xl font-bold group-hover:transition-colors group-hover:duration-300 ${
                      theme === 'dark'
                        ? 'text-cyan-300 group-hover:text-cyan-200'
                        : 'text-cyan-600 group-hover:text-cyan-700'
                    }`}>
                      {proyek.nama}
                    </h3>

                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {proyek.desk}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {proyek.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                            theme === 'dark'
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-500/30 group-hover:border-cyan-500/50'
                              : 'bg-cyan-400/20 text-cyan-700 border border-cyan-400/40 group-hover:bg-cyan-400/30 group-hover:border-cyan-400/60'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                                      className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/btn ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-500/30 hover:border-cyan-500/50'
                          : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-cyan-700 hover:from-cyan-400/40 hover:to-blue-400/40 border border-cyan-400/40 hover:border-cyan-400/60'
                      }`}
                    >
                      Lihat Proyek
                      <i className="ri-arrow-right-line group-hover/btn:translate-x-1 transition-transform"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* services */}
    <div id="layanan">
      <Services services={listServices} />
    </div>
    {/* services */}

    {/* Kontak Section */}
    <section id="kontak" className="relative py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-400 to-purple-500' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
              Mari Berkolaborasi
            </span>
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Punya ide atau pertanyaan? Hubungi saya sekarang dan mari ciptakan sesuatu yang luar biasa bersama
          </p>
        </div>

        {/* Contact Form */}
        <div className="group relative">
          {/* Gradient Border */}
          <div className={`absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-cyan-600/50 to-purple-600/50'
              : 'bg-gradient-to-r from-cyan-400/50 to-purple-400/50'
          }`}></div>

          <form
            action="https://formsubmit.co/sadadarguas@gmail.com"
            method="POST"
            className={`relative backdrop-blur-xl p-8 md:p-12 rounded-2xl border group-hover:border-cyan-500/50 transition-all duration-300 space-y-6 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border-cyan-500/20'
                : 'bg-gradient-to-br from-cyan-100/30 to-purple-100/30 border-cyan-400/30'
            }`}
            autoComplete="off"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}`}>Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan nama Anda"
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-1 ${
                    theme === 'dark'
                      ? 'bg-cyan-900/20 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-500/60 focus:ring-cyan-500/50'
                      : 'bg-cyan-100/20 border-cyan-400/40 text-gray-900 placeholder-gray-600 focus:border-cyan-400/60 focus:ring-cyan-400/50'
                  }`}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}`}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Masukkan email Anda"
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-1 ${
                    theme === 'dark'
                      ? 'bg-cyan-900/20 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-500/60 focus:ring-cyan-500/50'
                      : 'bg-cyan-100/20 border-cyan-400/40 text-gray-900 placeholder-gray-600 focus:border-cyan-400/60 focus:ring-cyan-400/50'
                  }`}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'}`}>Pesan</label>
              <textarea
                name="pesan"
                rows="6"
                placeholder="Tulis pesan Anda di sini..."
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-1 resize-none ${
                  theme === 'dark'
                    ? 'bg-cyan-900/20 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-500/60 focus:ring-cyan-500/50'
                    : 'bg-cyan-100/20 border-cyan-400/40 text-gray-900 placeholder-gray-600 focus:border-cyan-400/60 focus:ring-cyan-400/50'
                }`}
                required
              ></textarea>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className={`group/btn relative flex-1 px-8 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-white'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"></div>
                <div className={`absolute inset-0.5 rounded-lg group-hover/btn:bg-opacity-50 transition-all duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}></div>
                <span className={`relative flex items-center justify-center gap-2 group-hover/btn:text-cyan-300 transition-colors ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
                  Kirim Pesan <i className="ri-send-plane-2-line"></i>
                </span>
              </button>

              <button
                type="reset"
                className={`px-8 py-3 rounded-lg font-semibold border transition-all duration-300 backdrop-blur-sm ${
                  theme === 'dark'
                    ? 'border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10'
                    : 'border-cyan-400/50 hover:border-cyan-500 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-400/10'
                }`}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </div>

  );
}

export default App;