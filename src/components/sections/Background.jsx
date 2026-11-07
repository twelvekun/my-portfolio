
function Background({ theme }) {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden
        pointer-events-none"
    >
      {theme === 'dark' ? (
        <>
          {/* AMBER GLOW */}
          <div className="absolute -top-40 left-1/4
            w-[450px] h-[450px]
            bg-amber-600/[0.07] rounded-full
            blur-[140px]"
          />

          {/* ORANGE GLOW */}
          <div className="absolute top-1/3 right-0
            w-[400px] h-[400px]
            bg-orange-500/[0.05] rounded-full
            blur-[140px]"
          />

          {/* RED ACCENT */}
          <div className="absolute bottom-0 left-1/3
            w-[400px] h-[400px]
            bg-red-600/[0.04] rounded-full
            blur-[150px]"
          />
        </>
      ) : (
        <>
          {/* WARM LIGHT */}
          <div className="absolute -top-40 left-1/4
            w-[450px] h-[450px]
            bg-amber-300/[0.10] rounded-full
            blur-[140px]"
          />

          <div className="absolute top-1/3 right-0
            w-[400px] h-[400px]
            bg-orange-300/[0.07] rounded-full
            blur-[140px]"
          />

          <div className="absolute bottom-0 left-1/3
            w-[400px] h-[400px]
            bg-red-300/[0.04] rounded-full
            blur-[150px]"
          />
        </>
      )}
    </div>
  );
}

export default Background;
