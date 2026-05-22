import React, { useContext } from 'react';
import useTheme from '../hooks/useTheme';

function Services({ services = [] }) {
  const [theme] = useTheme();

  return (
    <section className="relative py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-400 to-purple-500' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
              Layanan
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Solusi lengkap untuk mengubah visi digital Anda menjadi kenyataan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient Border */}
              <div className={`absolute -inset-0.5 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-600/50 to-purple-600/50'
                  : 'bg-gradient-to-r from-cyan-400/50 to-purple-400/50'
              }`}></div>

              {/* Card */}
              <div className={`relative h-full backdrop-blur-xl p-8 rounded-xl border group-hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border-cyan-500/20'
                  : 'bg-gradient-to-br from-cyan-100/30 to-purple-100/30 border-cyan-400/30'
              }`}>

                {/* Icon */}
                <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg group-hover:transition-all group-hover:duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/40 group-hover:to-purple-500/40'
                    : 'bg-gradient-to-br from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/40 group-hover:to-purple-400/40'
                }`}>
                  <i className={`${service.icon} text-2xl bg-gradient-to-r ${theme === 'dark' ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}></i>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 group-hover:transition-colors group-hover:duration-300 ${
                  theme === 'dark'
                    ? 'text-white group-hover:text-cyan-300'
                    : 'text-gray-900 group-hover:text-cyan-600'
                }`}>
                  {service.judul}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.deskripsi}
                </p>

                {/* Line Accent */}
                <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                    : 'bg-gradient-to-r from-cyan-500 to-purple-500'
                }`}></div>

                {/* Hover Text */}
                <a
                  href="#"
                  className={`inline-block mt-6 text-sm font-medium transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform ${
                    theme === 'dark'
                      ? 'text-cyan-400 hover:text-cyan-300'
                      : 'text-cyan-600 hover:text-cyan-700'
                  }`}
                >
                  Pelajari lebih <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
