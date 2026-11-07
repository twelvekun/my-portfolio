
import { useEffect, useState } from 'react';
import Image from '../../data';

function LoadingOverlay({ show }) {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (!show) {
      setProgress(1);
      return;
    }

    setProgress(1);

    const startTime = Date.now();
    const duration = 5000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min(elapsed / duration, 1);

      // Mengubah angka dari 01 sampai 05
      const currentStep = Math.min(
        5,
        Math.floor(percentage * 5) + 1
      );

      setProgress(currentStep);

      if (percentage >= 1) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [show]);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-0 z-[9999] flex items-center justify-center
        overflow-hidden bg-[#08080c]
        transition-transform duration-[1200ms]
        ease-[cubic-bezier(0.77,0,0.175,1)]
        will-change-transform
        ${
          show
            ? 'translate-y-0 pointer-events-auto'
            : '-translate-y-full pointer-events-none'
        }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="loader-glow loader-glow-one" />
        <div className="loader-glow loader-glow-two" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Circular Rotating Logo */}
        <div className="relative w-64 h-64 flex items-center justify-center">

          <svg
            viewBox="0 0 300 300"
            className="absolute inset-0 w-full h-full animate-circle-spin"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150,150 m -112,0 a 112,112 0 1,1 224,0 a 112,112 0 1,1 -224,0"
              />
            </defs>

            <circle
              cx="150"
              cy="150"
              r="112"
              fill="none"
              stroke="rgba(251,113,133,0.25)"
              strokeWidth="0.7"
            />

            <text
              fill="#fda4af"
              fontSize="13"
              fontWeight="500"
              letterSpacing="5"
            >
              <textPath href="#circlePath" startOffset="0%">
                SANSDEV • DEVELOPER • SANSDEV • DEVELOPER •
              </textPath>
            </text>
          </svg>

          {/* Center Logo */}
          <div className="relative z-10 w-32 h-32 flex items-center justify-center">
            <img
              src={Image.LogoDark}
              alt="Sansdev"
              className="w-full h-full object-contain"
            />
          </div>

        </div>

        {/* Loading Indicator */}
        <div className="w-56 md:w-72">

          <div className="flex justify-between items-center mb-3">
            <span className="text-xs tracking-[0.25em] text-white/60">
              INITIALIZING
            </span>

            <span className="text-xs tracking-widest text-rose-400 tabular-nums">
              {String(progress).padStart(2, '0')} — 05
            </span>
          </div>

          {/* Progress Line */}
          <div className="loader-progress-track">
            <div
              className="loader-progress-fill"
              style={{
                width: `${(progress / 5) * 100}%`,
                animation: 'none',
                transition: 'width 300ms ease'
              }}
            />
          </div>

          <div className="flex justify-between mt-3">
            <span className="text-[10px] tracking-widest text-sky-300">
              SANSDEV PORTFOLIO
            </span>

            <span className="text-[10px] tracking-widest text-white/40">
              PLEASE WAIT
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-8 left-8 right-8
        flex justify-between text-[10px] tracking-[0.2em]
        text-white/30">
        <span>DESIGN & DEVELOPMENT</span>
        <span>© SANSDEV 2026</span>
      </div>
    </div>
  );
}

export default LoadingOverlay;
