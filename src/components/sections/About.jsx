
    import DataImage from '../../data';

    function About({ theme }) {
      const isDark = theme === 'dark';

      const gallery = [
        DataImage.HeroImage,
        DataImage.HeroImage2,
        DataImage.HeroImage3,
        DataImage.AboutImage,
      ];

      return (
        <section
          id="tentang"
          className={`relative px-3 sm:px-5 py-8 sm:py-12 transition-colors duration-500 ${
            isDark ? 'bg-amber-950' : 'bg-amber-100'
          }`}
        >
          {/* MAIN FRAME */}
          <div
            className={`relative max-w-[1500px] mx-auto overflow-hidden rounded-xl
            border p-5 sm:p-8 lg:p-12 ${
              isDark
                ? 'bg-[#100d0c] border-amber-900/30 text-white'
                : 'bg-[#171412] border-neutral-300 text-white'
            }`}
          >

            {/* DECORATIVE GRID */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #ffffff 1px, transparent 1px)
                `,
                backgroundSize: '25% 100%',
              }}
            />

            <div className="relative z-10">

              {/* TOP LABEL */}
              <div className="text-center mb-7 sm:mb-10">

                <span className="text-[9px] sm:text-xs uppercase
                  tracking-[0.3em] text-red-500 font-bold">
                  About Me — 2026
                </span>

                <h2 className="mt-2 text-3xl sm:text-5xl
                  lg:text-7xl font-black uppercase
                  tracking-tight leading-[0.95]">
                  Building Digital
                  <br />
                  <span className="text-red-500">
                    Experiences.
                  </span>
                </h2>

              </div>

              {/* MINI GALLERY */}
              <div className="grid grid-cols-4 gap-2
                max-w-md mx-auto mb-3 sm:mb-5">

                {gallery.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-square overflow-hidden border ${
                      isDark
                        ? 'border-red-900/50'
                        : 'border-red-800/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Portfolio gallery ${index + 1}`}
                      className="w-full h-full object-cover
                        grayscale hover:grayscale-0
                        hover:scale-110 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}

              </div>

              {/* MAIN IMAGE */}
              <div className="relative w-full overflow-hidden
                aspect-[4/3] sm:aspect-[16/8]
                bg-neutral-900 border border-red-900/40">

                <img
                  src={DataImage.AboutImage}
                  alt="About Ahmad Sadad Fathoni"
                  className="w-full h-full object-cover
                    object-center transition-transform
                    duration-700 hover:scale-105"
                  loading="lazy"
                />

                {/* IMAGE LABEL */}
                <div className="absolute bottom-3 left-3
                  sm:bottom-5 sm:left-5">

                  <span className="px-3 py-1.5
                    bg-red-600 text-white text-[9px]
                    sm:text-xs font-bold tracking-widest">
                    MY CREATIVE SPACE
                  </span>

                </div>

              </div>

              {/* CONTENT */}
              <div className="grid grid-cols-1
                lg:grid-cols-[1fr_auto]
                gap-6 sm:gap-8 mt-7 sm:mt-10
                items-end">

                {/* DESCRIPTION */}
                <div className="max-w-xl">

                  <span className="text-red-500
                    text-[10px] sm:text-xs font-bold
                    tracking-[0.25em] uppercase">
                    Who I Am
                  </span>

                  <h3 className="text-2xl sm:text-4xl
                    font-black uppercase mt-2 mb-4
                    leading-tight">
                    Full Stack Developer
                  </h3>

                  <p className="text-xs sm:text-sm
                    text-neutral-400 leading-[1.9]">
                    Saya adalah Freelance Full Stack Developer
                    yang memiliki passion dalam merancang,
                    membangun, dan menguji website maupun
                    aplikasi mobile. Saya berfokus pada
                    pengembangan solusi digital yang
                    fungsional, responsif, modern, dan
                    mudah digunakan.
                  </p>

                </div>

                {/* BUTTON */}
                <div className="flex lg:justify-end">

                  <a
                    href="#layanan"
                    className="inline-flex items-center
                      justify-center gap-3 px-5 py-3
                      rounded-full bg-white text-neutral-950
                      text-xs font-bold uppercase
                      tracking-wide hover:bg-red-600
                      hover:text-white transition-all
                      duration-300"
                  >
                    Explore My Services
                    <i className="ri-arrow-right-up-line text-base" />
                  </a>

                </div>

              </div>

              {/* BOTTOM DECORATION */}
              <div className="flex justify-between
                items-center mt-8 pt-4
                border-t border-white/10">

                <span className="text-[9px]
                  tracking-[0.2em] text-neutral-500">
                  PORTFOLIO / ABOUT
                </span>

                <span className="text-[9px]
                  tracking-[0.2em] text-red-500">
                  01 — 04
                </span>

              </div>

            </div>
          </div>
        </section>
      );
    }

    export default About;
