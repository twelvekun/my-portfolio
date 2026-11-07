
  import { listTools } from '../../data';

  function TechStack({ theme }) {
    const renderTool = (tool, idx, direction) => (
      <div
        key={`${direction}-${idx}`}
        className="group relative overflow-hidden rounded-xl
          flex-shrink-0 w-[112px] sm:w-36 lg:w-40"
      >
        <div
          className={`absolute inset-0 backdrop-blur-md ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
              : 'bg-amber-100'
          }`}
        />

        <div
          className={`absolute inset-0 rounded-xl border ${
            theme === 'dark'
              ? 'border-cyan-500/20 group-hover:border-cyan-500/50'
              : 'border-cyan-400/30 group-hover:border-cyan-400/60'
          }`}
        />

        <div
          className={`relative p-3 sm:p-5 lg:p-6
            flex flex-col items-center justify-center
            min-h-[115px] sm:min-h-[145px] lg:min-h-[160px]
            transition-transform group-hover:scale-105 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
        >
          <img
            src={tool.gambar}
            alt={tool.nama}
            className="w-10 h-10 sm:w-14 sm:h-14
              lg:w-16 lg:h-16 mb-2 sm:mb-3
              object-contain transition-transform
              group-hover:scale-110"
            loading="lazy"
          />

          <h4
            className={`font-semibold text-center
              text-[10px] sm:text-xs lg:text-sm ${
                theme === 'dark'
                  ? 'group-hover:text-cyan-300'
                  : 'group-hover:text-cyan-600'
              }`}
          >
            {tool.ket}
          </h4>
        </div>
      </div>
    );

    return (
     <section
  id="tools"
  className={`relative py-12 sm:py-16 lg:py-20
    px-4 sm:px-5 section-reveal overflow-hidden
    transition-colors duration-500
    ${
      theme === 'dark'
        ? 'bg-amber-950'
        : 'bg-amber-100'
    }`}
>
        <style>{`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }

          .carousel-track {
            width: max-content;
            display: flex;
            gap: 10px;
            animation: scroll-left 35s linear infinite;
          }

          .carousel-track.reverse {
            animation-name: scroll-right;
          }

          .carousel-wrapper:hover .carousel-track {
            animation-play-state: paused;
          }

          .carousel-wrapper:active .carousel-track {
            animation-play-state: paused;
          }
            .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

          @media (min-width: 640px) {
            .carousel-track {
              gap: 16px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .carousel-track {
              animation: none;
            }
          }
        `}</style>

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">

            <span className={`text-[10px] sm:text-xs
              tracking-[0.3em] uppercase font-semibold ${
                theme === 'dark'
                  ? 'text-red'
                  : 'text-red'
              }`}>
              My Expertise
            </span>

            <h2 className="text-3xl sm:text-4xl
              lg:text-5xl font-bold mt-2 mb-3">
              <span
                className={`bg-gradient-to-r ${
                  theme === 'dark'
                    ? 'from-red-400 to-white'
                    : 'from-red-600 to-black'
                } bg-clip-text text-transparent`}
              >
                Tech Stack
              </span>
            </h2>

            <p
              className={`text-xs sm:text-base lg:text-lg
                max-w-xl mx-auto ${
                  theme === 'dark'
                    ? 'text-gray-400'
                    : 'text-gray-600'
                }`}
            >
              Tools dan teknologi yang saya gunakan untuk
              membangun solusi digital modern.
            </p>

            <p className="text-[10px] sm:text-xs
              opacity-50 mt-3">
              ← Geser untuk melihat teknologi lainnya →
            </p>

          </div>

          {/* CAROUSEL */}
          <div className="relative space-y-3 sm:space-y-5">

            {/* ROW 1 */}
            <div className="carousel-wrapper overflow-x-auto
              overflow-y-hidden select-none
              touch-pan-x scrollbar-hide">

              <div className="carousel-track">
                {[...listTools, ...listTools].map((tool, idx) =>
                  renderTool(tool, idx, 'left')
                )}
              </div>

            </div>

            {/* ROW 2 */}
            <div className="carousel-wrapper overflow-x-auto
              overflow-y-hidden select-none
              touch-pan-x scrollbar-hide">

              <div className="carousel-track reverse">
                {[
                  ...[...listTools].reverse(),
                  ...[...listTools].reverse()
                ].map((tool, idx) =>
                  renderTool(tool, idx, 'right')
                )}
              </div>

            </div>

          </div>

        </div>
      </section>
    );
  }

  export default TechStack;
