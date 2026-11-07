
function Background({ theme }) {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden
        pointer-events-none"
    >
      {theme === 'dark' ? (
        <>
          {/* AMBER TOP GLOW */}
          <div
            className="absolute -top-40 left-1/4
              w-[500px] h-[500px]
              bg-amber-500/[0.08]
              rounded-full blur-[150px]"
          />

          {/* GOLD RIGHT GLOW */}
          <div
            className="absolute top-1/3 -right-40
              w-[450px] h-[450px]
              bg-yellow-600/[0.06]
              rounded-full blur-[150px]"
          />

          {/* WARM BROWN BOTTOM GLOW */}
          <div
            className="absolute -bottom-40 left-1/4
              w-[500px] h-[500px]
              bg-orange-900/[0.10]
              rounded-full blur-[160px]"
          />
        </>
      ) : (
        <>
          {/* SOFT AMBER TOP GLOW */}
          <div
            className="absolute -top-40 left-1/4
              w-[500px] h-[500px]
              bg-amber-300/[0.25]
              rounded-full blur-[150px]"
          />

          {/* GOLD RIGHT GLOW */}
          <div
            className="absolute top-1/3 -right-40
              w-[450px] h-[450px]
              bg-yellow-300/[0.18]
              rounded-full blur-[150px]"
          />

          {/* WARM BOTTOM GLOW */}
          <div
            className="absolute -bottom-40 left-1/4
              w-[500px] h-[500px]
              bg-orange-200/[0.20]
              rounded-full blur-[160px]"
          />
        </>
      )}
    </div>
  );
}

export default Background;
