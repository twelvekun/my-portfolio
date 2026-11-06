import DataImage from '../../data';
import PokerCards from '../PokerCards';

function Hero({ theme }) {
  return (
    <>
      <section
        id="home"
        className={`relative pt-32 pb-20 px-5 section-reveal transition-colors duration-300 ${
          theme === 'dark' ? 'bg-amber-950' : 'bg-amber-100'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 items-center justify-items-center">

            <div className="space-y-6 text-center flex flex-col items-center w-full">

              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md w-fit border mx-auto lg:mx-0 ${
                  theme === 'dark'
                    ? 'bg-amber-900/50 border-amber-700/50'
                    : 'bg-amber-200/60 border-amber-300'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    theme === 'dark' ? 'bg-amber-400' : 'bg-amber-600'
                  }`}
                />

                <span
                  className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-amber-200' : 'text-amber-900'
                  }`}
                >
                  Full Stack Developer
                </span>
              </div>

              {/* Heading */}
              <div>
                <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-black mb-4 leading-tight drop-shadow-sm ${
                  theme === 'dark' ? 'text-amber-50' : 'text-amber-950'
                }`}>
                  Ahmad Sadad Fathoni
                </h1>

                <p
                  className={`leading-relaxed text-base sm:text-lg lg:text-xl max-w-2xl mx-auto ${
                    theme === 'dark' ? 'text-amber-200/90' : 'text-amber-800'
                  }`}
                >
                  Crafting beautiful, modern web experiences with
                  cutting-edge technology
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="/AHMAD SADAD FATHONI resume.pdf"
                  download="AHMAD SADAD FATHONI resume.pdf"
                  className="group relative px-8 py-3 rounded-lg font-semibold overflow-hidden shadow-lg"
                >
                  <div className={`absolute inset-0 transition-colors duration-300 rounded-lg ${
                    theme === 'dark' ? 'bg-amber-600 group-hover:bg-amber-500' : 'bg-amber-700 group-hover:bg-amber-800'
                  }`} />

                  <span className="relative flex items-center gap-2 text-white">
                    Download CV
                    <i className="ri-download-2-fill" />
                  </span>
                </a>

                <a
                  href="#proyek"
                  className={`group px-8 py-3 rounded-lg font-semibold border transition-all duration-300 backdrop-blur-sm flex items-center gap-2 shadow-sm ${
                    theme === 'dark'
                      ? 'border-amber-700 hover:border-amber-500 text-amber-200 hover:bg-amber-900/50'
                      : 'border-amber-400 hover:border-amber-600 text-amber-900 hover:bg-amber-200/50'
                  }`}
                >
                  Lihat Proyek
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-4 pt-8 border-t text-center w-full max-w-md ${
                  theme === 'dark'
                    ? 'border-amber-800/60'
                    : 'border-amber-300'
                }`}
              >
                <Stat value="3+" label="Proyek" theme={theme} />
                <Stat value="4+" label="Tahun" theme={theme} />
                <Stat value="100%" label="Dedikasi" theme={theme} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label, theme }) {
  return (
    <div>
      <div
        className={`text-3xl font-bold ${
          theme === 'dark' ? 'text-amber-300' : 'text-amber-900'
        }`}
      >
        {value}
      </div>

      <p
        className={`text-sm ${
          theme === 'dark' ? 'text-amber-300/80' : 'text-amber-800'
        }`}
      >
        {label}
      </p>
    </div>
  );
}

export default Hero;