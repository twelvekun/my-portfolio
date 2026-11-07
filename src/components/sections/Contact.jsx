
function Contact({ theme }) {
  const isDark = theme === 'dark';

  const bg = isDark
    ? 'bg-amber-950 text-amber-50'
    : 'bg-amber-100 text-neutral-950';

  const inputStyle = `w-full px-4 py-3 rounded-lg border
    transition-all duration-300 focus:outline-none
    focus:ring-1 ${
      isDark
        ? 'bg-[#17110e] border-amber-700/50 text-white placeholder-amber-200/40 focus:border-red-500 focus:ring-red-500/30'
        : 'bg-white/60 border-amber-300 text-neutral-950 placeholder-amber-900/40 focus:border-red-500 focus:ring-red-500/30'
    }`;

  return (
    <section
      id="kontak"
      className={`relative py-16 sm:py-20 px-5
        section-reveal transition-colors duration-500 ${bg}`}
    >
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">

          <span className="text-[10px] sm:text-xs
            tracking-[0.3em] uppercase font-bold text-red-600">
            Get In Touch — 2026
          </span>

          <h2 className="text-3xl sm:text-5xl
            font-black uppercase mt-3 mb-4">
            Mari <span className="text-red-600">Berkolaborasi.</span>
          </h2>

          <p className={`text-sm sm:text-lg max-w-2xl mx-auto
            leading-relaxed ${
              isDark ? 'text-amber-200/60' : 'text-amber-900/70'
            }`}>
            Punya ide atau pertanyaan? Hubungi saya sekarang dan
            mari ciptakan sesuatu yang luar biasa bersama.
          </p>
        </div>

        {/* FORM CONTAINER */}
        <div className="group relative">

          {/* GLOW EFFECT */}
          <div className="absolute -inset-1 rounded-2xl
            bg-gradient-to-r from-red-600/30 to-amber-500/30
            blur opacity-0 group-hover:opacity-100
            transition duration-500" />

          <form
            action="https://formsubmit.co/sadadarguas@gmail.com"
            method="POST"
            className={`relative p-6 sm:p-8 md:p-12
              rounded-2xl border space-y-6
              transition-colors duration-500 ${
                isDark
                  ? 'bg-[#17110e] border-amber-800/50'
                  : 'bg-[#fffaf0] border-amber-300'
              }`}
          >
            <input
              type="hidden"
              name="_subject"
              value="Pesan dari Portfolio Sadad"
            />

            {/* NAME & EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="space-y-2">
                <label className="block text-sm font-semibold">
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan nama Anda"
                  className={inputStyle}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Masukkan email Anda"
                  className={inputStyle}
                  required
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Pesan
              </label>

              <textarea
                name="pesan"
                rows="6"
                placeholder="Tulis pesan Anda di sini..."
                className={`${inputStyle} resize-none`}
                required
              />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">

              <button
                type="submit"
                className="flex-1 px-8 py-3 rounded-lg
                  font-bold text-white bg-red-600
                  hover:bg-red-700 hover:-translate-y-1
                  transition-all duration-300"
              >
                Kirim Pesan
                <i className="ri-send-plane-2-line ml-2" />
              </button>

              <button
                type="reset"
                className={`px-8 py-3 rounded-lg
                  font-bold border transition-all duration-300 ${
                    isDark
                      ? 'border-amber-700 text-amber-200 hover:bg-amber-900'
                      : 'border-amber-400 text-amber-900 hover:bg-amber-200'
                  }`}
              >
                Reset
              </button>

            </div>
          </form>
        </div>

        {/* BOTTOM LABEL */}
        <div className="flex justify-between items-center
          mt-8 text-[9px] sm:text-[10px] tracking-widest
          opacity-50">
          <span>PORTFOLIO / CONTACT</span>
          <span>LET'S CONNECT</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;
