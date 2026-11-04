
function Contact({ theme }) {
  const inputStyle = `w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-1 ${
    theme === 'dark'
      ? 'bg-cyan-900/20 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-500/60 focus:ring-cyan-500/50'
      : 'bg-cyan-100/20 border-cyan-400/40 text-gray-900 placeholder-gray-600 focus:border-cyan-400/60 focus:ring-cyan-400/50'
  }`;

  return (
    <section
      id="kontak"
      className="relative py-20 px-5 section-reveal"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span
              className={`bg-gradient-to-r ${
                theme === 'dark'
                  ? 'from-cyan-400 to-purple-500'
                  : 'from-cyan-600 to-purple-600'
              } bg-clip-text text-transparent`}
            >
              Mari Berkolaborasi
            </span>
          </h2>

          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Punya ide atau pertanyaan? Hubungi saya sekarang dan
            mari ciptakan sesuatu yang luar biasa bersama.
          </p>
        </div>

        <div className="group relative">
          <div
            className={`absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-cyan-600/50 to-purple-600/50'
                : 'bg-gradient-to-r from-cyan-400/50 to-purple-400/50'
            }`}
          />

          <form
            action="https://formsubmit.co/sadadarguas@gmail.com"
            method="POST"
            className={`relative backdrop-blur-xl p-8 md:p-12 rounded-2xl border space-y-6 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border-cyan-500/20'
                : 'bg-gradient-to-br from-cyan-100/30 to-purple-100/30 border-cyan-400/30'
            }`}
          >
            <input
              type="hidden"
              name="_subject"
              value="Pesan dari Portfolio Sadad"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
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
                <label className="block text-sm font-medium">
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

            <div className="space-y-2">
              <label className="block text-sm font-medium">
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

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition"
              >
                Kirim Pesan
                <i className="ri-send-plane-2-line ml-2" />
              </button>

              <button
                type="reset"
                className={`px-8 py-3 rounded-lg font-semibold border transition ${
                  theme === 'dark'
                    ? 'border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10'
                    : 'border-cyan-400/50 text-cyan-600 hover:bg-cyan-400/10'
                }`}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
