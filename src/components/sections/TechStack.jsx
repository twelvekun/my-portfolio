
import { listTools } from '../../data';

function TechStack({ theme }) {
  const renderTool = (tool, idx, direction) => (
    <div
      key={`${direction}-${idx}`}
      className="group relative overflow-hidden rounded-xl flex-shrink-0 w-40"
    >
      <div
        className={`absolute inset-0 backdrop-blur-md ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20'
            : 'bg-gradient-to-br from-cyan-400/10 to-purple-400/10 group-hover:from-cyan-400/20 group-hover:to-purple-400/20'
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
        className={`relative p-6 flex flex-col items-center justify-center min-h-[160px] group-hover:scale-105 transition-transform ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}
      >
        <img
          src={tool.gambar}
          alt={tool.ket}
          className="w-16 h-16 mb-3 object-contain group-hover:scale-110 transition-transform"
          loading="lazy"
        />

        <h4
          className={`font-semibold text-center text-sm ${
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
      className="relative py-20 px-5 section-reveal"
    >
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .carousel-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .carousel-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-scroll-left,
          .carousel-scroll-right {
            animation: none;
          }
        }
      `}</style>

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
              Tech Stack
            </span>
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Tools dan teknologi yang saya gunakan untuk membangun
            solusi web yang powerful.
          </p>
        </div>

        <div className="relative">
          <div className="mb-8 overflow-hidden">
            <div
              className="carousel-scroll-left flex gap-4 w-max"
              style={{ width: 'fit-content' }}
            >
              {[...listTools, ...listTools].map((tool, idx) =>
                renderTool(tool, idx, 'left')
              )}
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="carousel-scroll-right flex gap-4 w-max"
              style={{ width: 'fit-content' }}
            >
              {[...listTools].reverse().map((tool, idx) =>
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
