
import DataImage from '../../data';

function About({ theme }) {
  return (
    <section
      id="tentang"
      className="relative py-20 px-5 section-reveal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">
            <span
              className={`bg-gradient-to-r ${
                theme === 'dark'
                  ? 'from-cyan-400 to-purple-500'
                  : 'from-cyan-600 to-purple-600'
              } bg-clip-text text-transparent`}
            >
              About Me
            </span>
          </h2>
        </div>

        <div className="group relative">
          <div
            className={`absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-600/50 to-purple-600/50'
                : 'bg-gradient-to-r from-cyan-400/50 to-purple-400/50'
            }`}
          />

          <div
            className={`relative backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-cyan-500/20 group-hover:border-cyan-500/50'
                : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50 group-hover:border-cyan-300'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
              {/* Image */}
              <div className="hidden lg:flex lg:col-span-2 p-6 lg:p-8">
                <img
                  src={DataImage.AboutImage}
                  alt="About Sadad Fathoni"
                  className="w-full h-auto object-cover rounded-lg max-w-sm"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 md:p-12 space-y-8">
                <h2 className="text-4xl font-bold">
                  <span
                    className={`bg-gradient-to-r ${
                      theme === 'dark'
                        ? 'from-cyan-400 to-purple-500'
                        : 'from-cyan-600 to-purple-600'
                    } bg-clip-text text-transparent`}
                  >
                    Introducing Myself
                  </span>
                </h2>

                <p
                  className={`text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Saya adalah Full Stack Developer yang memiliki
                  passion dalam menciptakan website dan aplikasi
                  mobile. Saya berfokus pada pengembangan solusi
                  digital yang fungsional, responsif, dan mudah
                  digunakan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <AboutStat
                    icon="ri-code-line"
                    value="3+"
                    label="Proyek"
                    color="cyan"
                    theme={theme}
                  />

                  <AboutStat
                    icon="ri-timeline-line"
                    value="4+"
                    label="Tahun Pengalaman"
                    color="purple"
                    theme={theme}
                  />

                  <AboutStat
                    icon="ri-team-line"
                    value="3+"
                    label="Klien"
                    color="blue"
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutStat({ icon, value, label, color, theme }) {
  const colors = {
    cyan: theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600',
    purple: theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
    blue: theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
  };

  const backgrounds = {
    cyan: 'from-cyan-500/30 to-blue-500/30',
    purple: 'from-purple-500/30 to-pink-500/30',
    blue: 'from-blue-500/30 to-cyan-500/30',
  };

  return (
    <div className="flex items-start gap-4">
      <div
        className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${backgrounds[color]}`}
      >
        <i className={`${icon} text-2xl ${colors[color]}`} />
      </div>

      <div>
        <h3 className={`text-3xl font-bold ${colors[color]}`}>
          {value}
        </h3>

        <p
          className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export default About;
