
function Background({ theme }) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {theme === 'dark' ? (
        <>
          <div className="absolute -top-20 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]" />

          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px]" />

          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        </>
      ) : (
        <>
          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-400/[0.07] rounded-full blur-[130px]" />

          <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-violet-400/[0.06] rounded-full blur-[130px]" />

          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-400/[0.05] rounded-full blur-[130px]" />
        </>
      )}
    </div>
  );
}

export default Background;
