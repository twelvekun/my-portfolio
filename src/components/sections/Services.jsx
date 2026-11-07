
import { useEffect, useRef } from 'react';

function Services({ services = [], theme }) {
  const isDark = theme === 'dark';
  const serviceRef = useRef(null);

  const bg = isDark
    ? 'bg-amber-950 text-amber-50'
    : 'bg-amber-100 text-neutral-950';

  useEffect(() => {
    const items = serviceRef.current?.querySelectorAll('.service-stagger');

    if (!items) return;

    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 120}ms`;
    });
  }, [services]);

  return (
    <section
      id="layanan"
      className={`relative px-3 sm:px-5 py-8 sm:py-12
        transition-colors duration-500 ${bg}`}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-xs
            tracking-[0.3em] uppercase font-bold text-red-600">
            What I Can Do — 2026
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl
            font-black uppercase mt-3 mb-4">
            My <span className="text-red-600">Services.</span>
          </h2>

          <p className={`text-xs sm:text-base max-w-xl mx-auto
            leading-relaxed ${
              isDark ? 'text-amber-200/60' : 'text-amber-900/70'
            }`}>
            Solusi digital untuk membantu mengembangkan ide
            dan kebutuhan bisnis Anda.
          </p>
        </div>

        {/* SERVICE GRID */}
        <div
          ref={serviceRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
        >
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`service-stagger group relative
                min-h-[190px] sm:min-h-[250px]
                p-4 sm:p-7 rounded-xl border
                overflow-hidden transition-all duration-300
                hover:-translate-y-2 ${
                  isDark
                    ? 'bg-[#17110e] border-amber-800/40 hover:border-red-500/60'
                    : 'bg-[#fffaf0] border-amber-300 hover:border-red-500/60'
                }`}
            >

              {/* NUMBER */}
              <span className={`absolute top-3 right-3
                text-[10px] tracking-widest ${
                  isDark ? 'text-white/20' : 'text-black/20'
                }`}>
                0{index + 1}
              </span>

              {/* ICON */}
              <div className="w-11 h-11 sm:w-14 sm:h-14
                rounded-lg bg-red-600/10
                flex items-center justify-center mb-5
                group-hover:bg-red-600 transition-colors duration-300">

                <i className={`${service.icon}
                  text-2xl sm:text-3xl text-red-600
                  group-hover:text-white transition-colors`} />
              </div>

              {/* TITLE */}
              <h3 className={`text-sm sm:text-xl font-bold
                mb-2 leading-snug ${
                  isDark ? 'text-white' : 'text-neutral-950'
                }`}>
                {service.judul}
              </h3>

              {/* DESCRIPTION */}
              <p className={`text-[10px] sm:text-sm
                leading-relaxed line-clamp-3 ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                {service.deskripsi}
              </p>

              {/* FOOTER */}
              <div className="flex items-center gap-2 mt-5
                text-red-600 text-[10px] sm:text-xs
                font-bold uppercase tracking-wider">
                My Service
                <i className="ri-arrow-right-up-line
                  group-hover:translate-x-1 transition-transform" />
              </div>

              {/* ACCENT */}
              <div className="absolute bottom-0 left-0
                h-1 w-0 bg-red-600
                group-hover:w-full transition-all duration-500" />

            </article>
          ))}
        </div>
      </div>

      {/* STAGGER ANIMATION */}
      <style>{`
        .service-stagger {
          opacity: 0;
          animation: serviceReveal 0.55s ease forwards;
        }

        @keyframes serviceReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-stagger {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Services;
