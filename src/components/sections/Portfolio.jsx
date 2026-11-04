
function Portfolio({ theme, projects }) {
  return (
    <section
      id="proyek"
      className="relative py-20 px-5 section-reveal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span
              className={`bg-gradient-to-r ${
                theme === 'dark'
                  ? 'from-cyan-400 to-purple-500'
                  : 'from-cyan-600 to-purple-600'
              } bg-clip-text text-transparent`}
            >
              Portfolio
            </span>
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Lihat beberapa proyek terbaik yang telah saya kerjakan
            dengan berbagai teknologi.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl"
            >
              <div
                className={`absolute -inset-0.5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-600/50 to-purple-600/50'
                    : 'bg-gradient-to-r from-cyan-400/50 to-purple-400/50'
                }`}
              />

              <div
                className={`relative border group-hover:border-cyan-500/50 rounded-xl overflow-hidden transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border-cyan-500/20'
                    : 'bg-gradient-to-br from-cyan-100/30 to-purple-100/30 border-cyan-400/30'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.gambar}
                    alt={project.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3
                    className={`text-xl font-bold ${
                      theme === 'dark'
                        ? 'text-cyan-300 group-hover:text-cyan-200'
                        : 'text-cyan-600 group-hover:text-cyan-700'
                    }`}
                  >
                    {project.nama}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {project.desk}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs rounded-full border ${
                          theme === 'dark'
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                            : 'bg-cyan-400/20 text-cyan-700 border-cyan-400/40'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      theme === 'dark'
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/40'
                        : 'bg-cyan-400/20 text-cyan-700 border-cyan-400/40 hover:bg-cyan-400/40'
                    }`}
                  >
                    Lihat Proyek
                    <i className="ri-arrow-right-line" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
