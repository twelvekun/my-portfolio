
import DataImage from '../../data';
import PokerCards from '../PokerCards';

function Hero({ theme }) {
  return (
    <>
      <section
        id="home"
        className="relative pt-32 pb-20 px-5 section-reveal"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

           <div className="space-y-6 text-center lg:text-left">

              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md w-fit border mx-auto lg:mx-0 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30'
                    : 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border-cyan-400/40'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500'
                  }`}
                />

                <span
                  className={`text-sm ${
                    theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'
                  }`}
                >
                  Full Stack Developer
                </span>
              </div>

              {/* Heading */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Ahmad Sadad Fathoni
                  </span>
                </h1>

                <p
                  className={`leading-relaxed text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
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
                  className="group relative px-8 py-3 rounded-lg font-semibold overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" />

                  <div className="absolute inset-0.5 rounded-lg bg-black group-hover:bg-gray-900 transition-colors duration-300" />

                  <span className="relative flex items-center gap-2 text-white group-hover:text-cyan-300">
                    Download CV
                    <i className="ri-download-2-fill" />
                  </span>
                </a>

                <a
                  href="#proyek"
                  className={`group px-8 py-3 rounded-lg font-semibold border transition-all duration-300 backdrop-blur-sm flex items-center gap-2 ${
                    theme === 'dark'
                      ? 'border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:bg-cyan-500/10'
                      : 'border-cyan-500 hover:border-cyan-600 text-cyan-600 hover:bg-cyan-50'
                  }`}
                >
                  Lihat Proyek
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-4 pt-8 border-t text-center ${
                  theme === 'dark'
                    ? 'border-cyan-500/20'
                    : 'border-cyan-400/30'
                }`}
              >
                <Stat value="3+" label="Proyek" color="cyan" theme={theme} />
                <Stat value="4+" label="Tahun" color="purple" theme={theme} />
                <Stat value="100%" label="Dedikasi" color="blue" theme={theme} />
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="hidden lg:flex justify-center">
              <PokerCards
                images={[
                  DataImage.HeroImage,
                  DataImage.HeroImage2,
                  DataImage.HeroImage3,
                ]}
                maxCards={3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Poker Cards Mobile */}
      <section className="lg:hidden relative py-10 px-5">
        <div className="max-w-7xl mx-auto flex justify-center">
          <PokerCards
            images={[
              DataImage.HeroImage,
              DataImage.HeroImage2,
              DataImage.HeroImage3,
            ]}
            maxCards={3}
          />
        </div>
      </section>
    </>
  );
}

function Stat({ value, label, color, theme }) {
  const colors = {
    cyan: theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600',
    purple: theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
    blue: theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
  };

  return (
    <div>
      <div className={`text-3xl font-bold ${colors[color]}`}>
        {value}
      </div>

      <p
        className={`text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {label}
      </p>
    </div>
  );
}

export default Hero;
