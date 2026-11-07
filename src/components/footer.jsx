
import React from "react";
import Image from '../data';

function Footer({ theme }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: 'ri-github-fill',
      label: 'GitHub',
      href: 'https://github.com/twelvekun'
    },
    {
      icon: 'ri-linkedin-box-fill',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ahmadsadadfathoni'
    },
    {
      icon: 'ri-instagram-fill',
      label: 'Instagram',
      href: 'https://instagram.com/sadadfath'
    },
    {
      icon: 'ri-twitter-x-fill',
      label: 'Twitter',
      href: 'https://twitter.com/sadadfathoni'
    },
  ];

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Tools', href: '#tools' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const titleColor =
    theme === 'dark' ? 'text-amber-50' : 'text-neutral-950';

  const textColor =
    theme === 'dark' ? 'text-amber-200/60' : 'text-amber-950/70';

  const linkColor =
    theme === 'dark'
      ? 'text-amber-200/60 hover:text-amber-300'
      : 'text-amber-900/70 hover:text-amber-700';

  return (
    <footer
      className={`relative mt-32 overflow-hidden border-t
        transition-colors duration-500 ${
          theme === 'dark'
            ? 'border-amber-800/40 bg-amber-950'
            : 'border-amber-300/60 bg-amber-100'
        }`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-amber-950 via-amber-950 to-[#2b1002]'
            : 'bg-gradient-to-b from-amber-100 via-amber-100 to-[#ffedbd]'
        }`}
      />

      {/* Amber Glow */}
      <div
        className={`absolute -bottom-32 -left-20
          w-96 h-96 rounded-full blur-[120px] ${
            theme === 'dark'
              ? 'bg-amber-600/10'
              : 'bg-amber-300/25'
          }`}
      />

      {/* Gold Glow */}
      <div
        className={`absolute -top-32 right-0
          w-96 h-96 rounded-full blur-[120px] ${
            theme === 'dark'
              ? 'bg-yellow-700/10'
              : 'bg-yellow-300/20'
          }`}
      />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <div className="space-y-4">

            <div className="flex items-center gap-3 group w-fit">

              <img
                src={
                  theme === 'dark'
                    ? Image.LogoDark
                    : Image.Logo
                }
                alt="Ahmad Sadad Fathoni"
                className="w-16 h-16 object-contain
                  transition-transform duration-500
                  group-hover:scale-110"
              />

              <div>
                <h3 className={`text-xl font-bold ${titleColor}`}>
                  Sadad
                </h3>

                <p className={`text-xs tracking-widest ${textColor}`}>
                  FATHONI
                </p>
              </div>

            </div>

            <p className={`text-sm leading-relaxed ${textColor}`}>
              Full Stack Developer dengan passion dalam menciptakan
              pengalaman digital yang luar biasa dan inovatif.
            </p>

          </div>

          {/* Navigation Links */}
          <div>

            <h4 className={`text-lg font-bold mb-6 ${titleColor}`}>
              Navigasi
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`relative group text-sm
                      transition-colors duration-300 ${linkColor}`}
                  >
                    {link.label}

                    <span
                      className={`absolute -bottom-1 left-0
                        w-0 h-0.5 group-hover:w-full
                        transition-all duration-300 ${
                          theme === 'dark'
                            ? 'bg-gradient-to-r from-amber-400 to-yellow-600'
                            : 'bg-gradient-to-r from-amber-600 to-yellow-700'
                        }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Services */}
          <div>

            <h4 className={`text-lg font-bold mb-6 ${titleColor}`}>
              Layanan
            </h4>

            <ul className="space-y-3">

              {[
                'Web Development',
                'Mobile App',
                'UI/UX Design',
                'Backend Dev'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#layanan"
                    className={`text-sm transition-colors duration-300 ${linkColor}`}
                  >
                    {service}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Social Links */}
          <div>

            <h4 className={`text-lg font-bold mb-6 ${titleColor}`}>
              Terhubung
            </h4>

            <div className="flex gap-3 mb-6">

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-lg
                    flex items-center justify-center
                    transition-all duration-300
                    hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-amber-900/40 border border-amber-700/40 text-amber-300 hover:bg-amber-800/60 hover:border-amber-500'
                        : 'bg-amber-200/60 border border-amber-400/50 text-amber-800 hover:bg-amber-300/70 hover:border-amber-600'
                    }`}
                >
                  <i className={`${social.icon} text-lg`} />
                </a>
              ))}

            </div>

            {/* Newsletter */}
            <div className="space-y-3">

              <p className={`text-xs ${textColor}`}>
                Subscribe untuk updates
              </p>

              <form
                className="flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Email Anda"
                  aria-label="Email Anda"
                  className={`min-w-0 flex-1 px-3 py-2
                    rounded-lg text-sm focus:outline-none
                    focus:ring-1 transition-all ${
                      theme === 'dark'
                        ? 'bg-amber-900/50 border border-amber-700/50 text-amber-50 placeholder-amber-200/40 focus:border-amber-400 focus:ring-amber-500/30'
                        : 'bg-amber-50/70 border border-amber-300 text-neutral-900 placeholder-amber-800/50 focus:border-amber-600 focus:ring-amber-500/30'
                    }`}
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-3 py-2 rounded-lg
                    bg-gradient-to-r from-amber-600 to-yellow-600
                    hover:from-amber-500 hover:to-yellow-500
                    text-white text-sm font-medium
                    transition-all duration-300"
                >
                  <i className="ri-send-plane-2-line" />
                </button>
              </form>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div
          className={`h-px bg-gradient-to-r mb-8 ${
            theme === 'dark'
              ? 'from-transparent via-amber-500/40 to-transparent'
              : 'from-transparent via-amber-500/50 to-transparent'
          }`}
        />

        {/* Bottom Section */}
        <div
          className={`flex flex-col md:flex-row
            items-center justify-between text-center
            md:text-left text-sm gap-4 ${textColor}`}
        >

          <p>
            © {currentYear} Sadad Fathoni. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="#"
              className="transition-colors duration-300 hover:text-amber-500"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-amber-500"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-amber-500"
            >
              Sitemap
            </a>

          </div>

        </div>

      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}
        className="fixed bottom-8 right-8 z-40
          w-12 h-12 rounded-full
          bg-gradient-to-br from-amber-500 to-yellow-600
          text-white flex items-center justify-center
          hover:scale-110 transition-all duration-300
          shadow-lg shadow-amber-900/20"
        aria-label="Back to top"
      >
        <i className="ri-arrow-up-line text-lg" />
      </button>

    </footer>
  );
}

export default Footer;
