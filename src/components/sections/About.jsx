import DataImage from '../../data';

function About({ theme }) {
  return (
    <section
      id="tentang"
      className={`relative py-20 px-5 section-reveal transition-colors duration-300 ${
        theme === 'dark' ? 'bg-stone-900' : 'bg-amber-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
       

        <div className="group relative">
          <div
            className={`absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-amber-600/30 to-yellow-600/30'
                : 'bg-gradient-to-r from-amber-400/30 to-yellow-400/30'
            }`}
          />

          <div
            className={`relative backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-neutral-900/80 border-amber-500/20 group-hover:border-amber-500/50 shadow-2xl'
                : 'bg-amber-50/40 border-amber-200 shadow-xl shadow-amber-900/5 group-hover:border-amber-400'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
              {/* Image */}
              <div className="hidden lg:flex lg:col-span-2 p-6 lg:p-8">
                <img
                  src={DataImage.AboutImage}
                  alt="About Sadad Fathoni"
                  className="w-full h-auto object-cover rounded-lg max-w-sm shadow-md border border-amber-500/20"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 md:p-12 space-y-8">
                <h2 className="text-4xl font-bold">
                  <span
                    className={`bg-gradient-to-r ${
                      theme === 'dark'
                        ? 'from-amber-400 to-yellow-400'
                        : 'from-amber-600 to-yellow-600'
                    } bg-clip-text text-transparent`}
                  >
                    About
                  </span>
                </h2>

                <p
                  className={`text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  Saya adalah Freelance Full Stack Developer yang memiliki
                  passion dalam merancang, membangun dan menguji website ataupun aplikasi
                  mobile. Saya berfokus pada pengembangan solusi
                  digital yang fungsional, responsif, dan mudah
                  digunakan.
                </p>

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
    amber: theme === 'dark' ? 'text-amber-400' : 'text-amber-600',
    yellow: theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600',
    orange: theme === 'dark' ? 'text-orange-400' : 'text-orange-600',
  };

  const backgrounds = {
    amber: theme === 'dark' ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-amber-100 border border-amber-200',
    yellow: theme === 'dark' ? 'bg-yellow-500/10 border border-yellow-500/20' : 'bg-yellow-100 border border-yellow-200',
    orange: theme === 'dark' ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-100 border border-orange-200',
  };

  return (
    <div className="flex items-start gap-4">
      <div
        className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${backgrounds[color]}`}
      >
        <i className={`${icon} text-2xl ${colors[color]}`} />
      </div>

      <div>
        <h3 className={`text-3xl font-bold ${colors[color]}`}>
          {value}
        </h3>

        <p
          className={`text-sm ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export default About;