import React from "react";
import useTheme from '../hooks/useTheme';

function Footer() {
  const [theme] = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'ri-github-fill', label: 'GitHub', href: 'https://github.com/twelvekun' },
    { icon: 'ri-linkedin-box-fill', label: 'LinkedIn', href: 'https://linkedin.com/in/ahmadsadadfathoni' },
    { icon: 'ri-instagram-fill', label: 'Instagram', href: 'https://instagram.com/sadad fath' },
    { icon: 'ri-twitter-x-fill', label: 'Twitter', href: 'https://twitter.com/sadadfathoni' },
  ];

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Tools', href: '#tools' },
    { label: 'Proyek', href: '#proyek' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <footer className={`relative mt-32 border-t transition-colors duration-300 ${
      theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-400/30'
    }`}>
      {/* Background Gradient */}
      <div className={`absolute inset-0 -z-10 ${theme === 'dark' ? 'bg-gradient-to-b from-black via-black/80 to-black' : 'bg-gradient-to-b from-white via-blue-50/50 to-white'}`}></div>

      {/* Decorative Blobs */}
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -z-10 ${
        theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-400/10'
      }`}></div>
      <div className={`absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl -z-10 ${
        theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-400/10'
      }`}></div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group w-fit">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                SF
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Sadad
                </h3>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Fathoni</p>
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Full Stack Developer dengan passion dalam menciptakan pengalaman digital yang luar biasa dan inovatif.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-300 text-sm relative group ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-cyan-400'
                        : 'text-gray-600 hover:text-cyan-600'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-500'
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Layanan</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className={`transition-colors duration-300 text-sm ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-cyan-400'
                    : 'text-gray-600 hover:text-cyan-600'
                }`}>
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-300 text-sm ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-cyan-400'
                    : 'text-gray-600 hover:text-cyan-600'
                }`}>
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-300 text-sm ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-cyan-400'
                    : 'text-gray-600 hover:text-cyan-600'
                }`}>
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-300 text-sm ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-cyan-400'
                    : 'text-gray-600 hover:text-cyan-600'
                }`}>
                  Backend Dev
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Terhubung</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 group hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 hover:text-cyan-300'
                      : 'bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border-cyan-400/40 hover:border-cyan-400/60 text-cyan-600 hover:text-cyan-700'
                  }`}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>

            {/* Newsletter Subscribe */}
            <div className="space-y-3">
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Subscribe untuk updates</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className={`flex-1 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-cyan-900/20 border border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-500/60 focus:ring-cyan-500/50'
                      : 'bg-cyan-100/20 border border-cyan-400/40 text-gray-900 placeholder-gray-600 focus:border-cyan-400/60 focus:ring-cyan-400/50'
                  }`}
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  <i className="ri-send-plane-2-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px bg-gradient-to-r transition-colors duration-300 mb-8 ${
          theme === 'dark'
            ? 'from-transparent via-cyan-500/30 to-transparent'
            : 'from-transparent via-cyan-400/40 to-transparent'
        }`}></div>

        {/* Bottom Section */}
        <div className={`flex flex-col md:flex-row items-center justify-between text-center md:text-left text-sm gap-4 ${
          theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
        }`}>
          <p>© {currentYear} Sadad Fathoni. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className={`transition-colors duration-300 ${
              theme === 'dark'
                ? 'hover:text-cyan-400'
                : 'hover:text-cyan-600'
            }`}>
              Privacy Policy
            </a>
            <a href="#" className={`transition-colors duration-300 ${
              theme === 'dark'
                ? 'hover:text-cyan-400'
                : 'hover:text-cyan-600'
            }`}>
              Terms of Service
            </a>
            <a href="#" className={`transition-colors duration-300 ${
              theme === 'dark'
                ? 'hover:text-cyan-400'
                : 'hover:text-cyan-600'
            }`}>
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-cyan-500/50 hover:scale-110 transform"
        aria-label="Back to top"
      >
        <i className="ri-arrow-up-line text-lg"></i>
      </button>
    </footer>
  );
}

export default Footer;
