
import Image from '../../data';

function Hero({ theme }) {
  const isDark = theme === 'dark';

  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'ri-instagram-line',
      url: 'https://instagram.com/sadad_fath'
    },
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-box-line',
      url: 'https://linkedin.com/in/ahmadsadadfathoni'
    },
    {
      name: 'GitHub',
      icon: 'ri-github-line',
      url: 'https://github.com/twelvekun'
    }
  ];

  const bg = isDark
    ? 'bg-amber-950 text-amber-50'
    : 'bg-amber-100 text-neutral-950';

  return (
    <section
      id="home"
      className={`relative min-h-screen overflow-hidden
      transition-colors duration-500 ${bg}`}
    >

      {/* =====================================
          DESKTOP HERO
      ====================================== */}

      <div className="hidden lg:block relative
      w-full h-screen min-h-[720px]
      max-h-[1100px] overflow-hidden">

        <div className="relative w-full h-full
        max-w-[1800px] mx-auto px-12 xl:px-16">

          {/* TOP BADGE */}
          <div className="absolute top-28 left-12 xl:left-16
          z-30">

            <div className={`inline-flex items-center gap-2
            px-4 py-2.5 rounded-full border text-xs
            shadow-sm backdrop-blur-md ${
              isDark
                ? 'bg-amber-900/50 border-amber-700'
                : 'bg-amber-100 border-neutral-200'
            }`}>

              <span className="w-2 h-2 rounded-full
              bg-emerald-500 animate-pulse" />

              Available for Work

            </div>

          </div>

          {/* TOP RIGHT LABEL */}
          <div className="absolute top-28 right-12 xl:right-16
          z-30 text-xs tracking-widest opacity-50">

            PORTFOLIO — 2026

          </div>

          {/* BIG NAME */}
          <div className="absolute top-[185px] xl:top-[190px]
          left-0 right-0 z-10 px-8 xl:px-12
          text-center">

            <h1 className="uppercase font-black
            tracking-[-0.075em] leading-[0.85]
            whitespace-nowrap
            text-[clamp(3.5rem,7.1vw,8.5rem)]">

              <span
                style={{
                  WebkitTextStroke: isDark
                    ? '2px #fff7ed'
                    : '2px #171717',
                  color: 'transparent'
                }}
              >
                AHMAD
              </span>

              <span className="ml-3 xl:ml-5">
                SADAD
              </span>

              <span
                className="ml-3 xl:ml-5"
                style={{
                  WebkitTextStroke: isDark
                    ? '2px #fff7ed'
                    : '2px #171717',
                  color: 'transparent'
                }}
              >
                FATHONI
              </span>

            </h1>

          </div>

          {/* PORTRAIT CENTER */}
          <div className="absolute inset-x-0 bottom-0
          z-10 flex items-end justify-center
          pointer-events-none">

            <img
              src={Image.HeroImage}
              alt="Ahmad Sadad Fathoni"
              className="block h-[65vh] max-h-[650px]
              min-h-[450px] max-w-[48vw]
              w-auto object-contain object-bottom
              grayscale"
            />

          </div>

          {/* LEFT INTRO */}
          <div className="absolute left-12 xl:left-16
          bottom-12 xl:bottom-14 z-20
          w-[260px] xl:w-[290px]">

            <h2 className="text-2xl xl:text-3xl
            font-bold mb-3">

              Full Stack Developer

            </h2>

            <p className="text-sm opacity-70
            leading-relaxed mb-5">

              Crafting beautiful, modern web experiences
              with cutting-edge technology.

            </p>

            <div className="flex flex-wrap gap-3">

              <a
                href="/AHMAD SADAD FATHONI resume.pdf"
                download
                className={`inline-flex items-center gap-2
                px-6 py-3 rounded-full text-sm font-semibold
                shadow-lg transition-all hover:-translate-y-1
                ${
                  isDark
                    ? 'bg-amber-100 text-amber-950'
                    : 'bg-neutral-950 text-white'
                }`}
              >
                Download CV
                <i className="ri-arrow-right-up-line" />
              </a>

            </div>

          </div>

          {/* RIGHT SOCIAL LINKS */}
          <div className="absolute right-12 xl:right-16
          bottom-12 xl:bottom-14 z-20
          flex flex-col gap-3">

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2
                px-4 py-2.5 rounded-full border
                text-sm transition-all duration-300
                hover:-translate-y-1 ${
                  isDark
                    ? 'border-amber-700 hover:bg-amber-900'
                    : 'border-neutral-200 bg-white/70 hover:bg-neutral-100'
                }`}
              >

                <i className={social.icon} />

                {social.name}

              </a>
            ))}

          </div>

        </div>
      </div>


      {/* =====================================
          MOBILE HERO
          Layout mobile tetap dipertahankan
      ====================================== */}

      <div className="lg:hidden relative min-h-screen
      flex flex-col px-5 sm:px-8 pt-24 pb-8">

        {/* BADGE */}
        <div className="relative z-20 flex items-center
        justify-between">

          <div className={`inline-flex items-center gap-2
          px-3 py-2 rounded-full border text-xs
          shadow-sm backdrop-blur-md ${
            isDark
              ? 'border-amber-700 bg-amber-900/50'
              : 'border-neutral-200 bg-white'
          }`}>

            <span className="w-2 h-2 rounded-full
            bg-emerald-500 animate-pulse" />

            Available for New Project

          </div>

          <span className="hidden sm:block text-xs
          opacity-50 tracking-widest">

            PORTFOLIO — 2026

          </span>

        </div>

        {/* NAME */}
        <div className="relative z-10 mt-10 text-center">

          <h1 className="uppercase font-black
          tracking-[-0.065em] leading-[0.85]
          text-[clamp(2.8rem,10vw,9.5rem)]">

            <span
              className="block"
              style={{
                WebkitTextStroke: isDark
                  ? '1.5px #fff7ed'
                  : '1.5px #171717',
                color: 'transparent'
              }}
            >
              AHMAD
            </span>

            <span className="block">
              SADAD
            </span>

          </h1>

          <p className="text-xs sm:text-sm
          tracking-[0.25em] opacity-50 mt-4">

            FULL STACK DEVELOPER

          </p>

        </div>

        {/* PORTRAIT */}
        <div className="relative z-0 flex-1
        flex items-end justify-center
        min-h-[340px] sm:min-h-[420px]
        pointer-events-none">

          <img
            src={Image.HeroImage}
            alt="Ahmad Sadad Fathoni"
            className="w-auto h-full max-h-[520px]
            sm:max-h-[600px] max-w-[95%]
            object-contain object-bottom grayscale"
          />

        </div>

        {/* BOTTOM CONTENT */}
        <div className="relative z-20 grid grid-cols-1
        gap-8 mt-5">

          {/* INTRO */}
          <div className="max-w-sm text-center mx-auto">

            <h2 className="text-xl sm:text-2xl
            font-bold mb-2">

              Full Stack Developer

            </h2>

            <p className="text-sm opacity-70
            leading-relaxed mb-5">

              Crafting beautiful, modern web experiences
              with cutting-edge technology.

            </p>

            <div className="flex flex-wrap
            justify-center gap-3">

              <a
                href="/AHMAD SADAD FATHONI resume.pdf"
                download
                className={`px-8 py-3 rounded-full
                text-sm font-semibold shadow-lg ${
                  isDark
                    ? 'bg-amber-100 text-amber-950'
                    : 'bg-neutral-950 text-white'
                }`}
              >
                Download CV
                <i className="ri-arrow-right-up-line ml-2" />
              </a>

              <a
                href="#proyek"
                className={`px-6 py-3 rounded-full
                text-sm border ${
                  isDark
                    ? 'border-amber-700 hover:bg-amber-900'
                    : 'border-neutral-300 hover:bg-neutral-100'
                }`}
              >
                My Projects
              </a>

            </div>

          </div>

          {/* SOCIAL */}
          <div className="flex flex-wrap
          justify-center gap-2">

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2
                px-4 py-2.5 rounded-full border
                text-xs transition-all ${
                  isDark
                    ? 'border-amber-800 hover:bg-amber-900'
                    : 'border-neutral-200 bg-white/70 hover:bg-neutral-100'
                }`}
              >

                <i className={social.icon} />

                {social.name}

              </a>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
