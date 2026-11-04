
function LoadingOverlay({ show }) {
  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        show
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-cyan-500 border-r-purple-500 animate-spin" />

        <div className="text-sm text-gray-400">
          Loading...
        </div>
      </div>
    </div>
  );
}

export default LoadingOverlay;
