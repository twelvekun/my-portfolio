
import { useState, useEffect, useRef } from 'react';

function Portfolio({ theme, projects }) {
  const isDark = theme === 'dark';

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const touchStartX = useRef(0);

  const background = isDark
    ? 'bg-amber-950 text-amber-50'
    : 'bg-amber-100 text-neutral-950';

  const images = selectedProject
    ? (
        Array.isArray(selectedProject.gambar)
          ? selectedProject.gambar
          : [selectedProject.gambar]
      )
    : [];

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(0);
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      (prev - 1 + images.length) % images.length
    );
  };

  // Keyboard navigation dan scroll lock
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeProject();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, images.length]);

  // Mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const difference =
      touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(difference) < 50) return;

    if (difference > 0) {
      nextImage();
    } else {
      prevImage();
    }
  };

  return (
    <section
      id="proyek"
      className={`relative py-14 sm:py-20 px-4 sm:px-5
        section-reveal transition-colors duration-500 ${background}`}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-16">

          <span className={`text-[10px] sm:text-xs
            font-bold tracking-[0.3em] uppercase ${
              isDark ? 'text-red-400' : 'text-red-700'
            }`}>
            Selected Works — 2026
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl
            font-black uppercase tracking-tight mt-3 mb-4">
            <span className={isDark ? 'text-white' : 'text-neutral-950'}>
              My
            </span>{' '}
            <span className="text-red-600">
              Portfolio.
            </span>
          </h2>

          <p className={`text-xs sm:text-base max-w-xl
            mx-auto leading-relaxed ${
              isDark ? 'text-amber-200/60' : 'text-amber-900/70'
            }`}>
            Beberapa proyek yang telah saya rancang dan
            kembangkan menggunakan berbagai teknologi modern.
          </p>

        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 gap-5 sm:gap-7">

          {projects.map((project, index) => {
            const projectImages = Array.isArray(project.gambar)
              ? project.gambar
              : [project.gambar];

            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={() => openProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProject(project);
                  }
                }}
                className={`group relative rounded-xl overflow-hidden
                  border cursor-pointer transition-all duration-500
                  hover:-translate-y-2 ${
                    isDark
                      ? 'bg-[#17110e] border-amber-800/40 hover:border-red-500/60'
                      : 'bg-[#fffaf0] border-amber-300 hover:border-red-500/60'
                  }`}
              >

                {/* IMAGE */}
                <div className="relative aspect-[16/10]
                  overflow-hidden bg-neutral-900">

                  <img
                    src={projectImages[0]}
                    alt={project.nama}
                    className="w-full h-full object-cover
                      transition-transform duration-700
                      group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0
                    bg-gradient-to-t from-black/80
                    via-transparent to-transparent" />

                  {/* IMAGE COUNT */}
                  {projectImages.length > 1 && (
                    <span className="absolute top-3 right-3
                      px-3 py-1 rounded-full bg-black/60
                      text-white text-[10px] backdrop-blur-md">
                      <i className="ri-image-line mr-1" />
                      {projectImages.length} Images
                    </span>
                  )}

                  {/* PROJECT NUMBER */}
                  <span className="absolute bottom-3 left-4
                    text-white/70 text-xs tracking-widest">
                    PROJECT — {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* PREVIEW ICON */}
                  <div className="absolute bottom-3 right-4
                    w-9 h-9 rounded-full bg-red-600
                    text-white flex items-center justify-center
                    transition-transform duration-300
                    group-hover:rotate-45">
                    <i className="ri-arrow-right-up-line text-lg" />
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-5">

                  <h3 className={`text-lg sm:text-xl
                    font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-neutral-950'
                    }`}>
                    {project.nama}
                  </h3>

                  <p className={`text-xs sm:text-sm
                    leading-relaxed line-clamp-2 mb-4 ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                    {project.desk}
                  </p>

                  {/* TOOLS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools?.slice(0, 4).map((tool, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] px-2.5 py-1
                          rounded-full border ${
                            isDark
                              ? 'border-red-900/60 bg-red-950/40 text-red-300'
                              : 'border-red-200 bg-red-50 text-red-700'
                          }`}
                      >
                        {tool}
                      </span>
                    ))}

                    {project.tools?.length > 4 && (
                      <span className="text-[10px] px-2 py-1 opacity-60">
                        +{project.tools.length - 4}
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center justify-between
                    mt-5 pt-4 border-t ${
                      isDark ? 'border-white/10' : 'border-amber-200'
                    }`}>

                    <span className={`text-[10px] uppercase
                      tracking-widest ${
                        isDark ? 'text-neutral-500' : 'text-neutral-500'
                      }`}>
                      Explore Project
                    </span>

                    <i className={`ri-arrow-right-line
                      transition-transform group-hover:translate-x-2 ${
                        isDark ? 'text-red-400' : 'text-red-700'
                      }`} />

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* ==================================
          PROJECT DETAIL MODAL
      ================================== */}

      
{/* ==================================
    PROJECT DETAIL MODAL
================================== */}

{selectedProject && (
  <div
    onClick={closeProject}
    className="fixed inset-0 z-[100]
      flex items-center justify-center
      p-2 sm:p-5 lg:p-8
      bg-black/80 backdrop-blur-md
      animate-in fade-in duration-300
      overflow-y-auto"
  >

    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-5xl
        max-h-[96dvh] sm:max-h-[90dvh]
        flex flex-col
        rounded-xl sm:rounded-2xl
        overflow-hidden
        bg-[#171412] text-white
        border border-white/10
        shadow-2xl
        animate-in slide-in-from-bottom-4
        fade-in duration-300"
    >

      {/* CLOSE BUTTON */}
      <button
        onClick={closeProject}
        aria-label="Close project preview"
        className="absolute top-3 right-3 z-40
          w-9 h-9 sm:w-11 sm:h-11
          rounded-full bg-black/75
          backdrop-blur-md border border-white/20
          flex items-center justify-center
          hover:bg-red-600 active:scale-90
          transition-all"
      >
        <i className="ri-close-line text-xl" />
      </button>

      {/* IMAGE GALLERY */}
      <div
        className="relative w-full flex-shrink-0
          h-[34dvh] min-h-[190px] max-h-[320px]
          sm:h-auto sm:max-h-none
          sm:aspect-[16/8]
          bg-black overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        <img
          key={`${selectedProject.id}-${activeImage}`}
          src={images[activeImage]}
          alt={`${selectedProject.nama} - Image ${activeImage + 1}`}
          className="w-full h-full object-contain
            animate-in fade-in duration-300"
        />

        {/* GRADIENT */}
        <div className="absolute inset-x-0 bottom-0
          h-20 bg-gradient-to-t
          from-black/80 to-transparent
          pointer-events-none"
        />

        {/* IMAGE COUNTER */}
        <span className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5
          px-3 py-1.5 rounded-full
          bg-black/60 backdrop-blur-md
          text-[10px] sm:text-xs
          text-white tracking-widest">
          IMAGE {String(activeImage + 1).padStart(2, '0')}
          {' / '}
          {String(images.length).padStart(2, '0')}
        </span>

        {/* NAVIGATION */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 top-1/2
                -translate-y-1/2
                w-9 h-9 sm:w-11 sm:h-11
                rounded-full bg-black/65
                border border-white/20
                flex items-center justify-center
                hover:bg-red-600 active:scale-90
                transition-all"
            >
              <i className="ri-arrow-left-line text-lg sm:text-xl" />
            </button>

            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 top-1/2
                -translate-y-1/2
                w-9 h-9 sm:w-11 sm:h-11
                rounded-full bg-black/65
                border border-white/20
                flex items-center justify-center
                hover:bg-red-600 active:scale-90
                transition-all"
            >
              <i className="ri-arrow-right-line text-lg sm:text-xl" />
            </button>
          </>
        )}

      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div className="flex-shrink-0 flex gap-2
          px-3 py-3 sm:px-5
          overflow-x-auto scrollbar-hide
          border-b border-white/10
          bg-[#100d0c]">

          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              aria-label={`Show image ${index + 1}`}
              className={`flex-shrink-0
                w-14 h-11 sm:w-20 sm:h-14
                rounded-md overflow-hidden
                border-2 transition-all ${
                  activeImage === index
                    ? 'border-red-500 opacity-100'
                    : 'border-white/10 opacity-50 hover:opacity-100'
                }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}

        </div>
      )}

      {/* PROJECT CONTENT */}
      <div className="flex-1 overflow-y-auto
        overscroll-contain
        p-4 sm:p-7 lg:p-10">

        <span className="text-red-500
          text-[9px] sm:text-xs
          font-bold tracking-[0.3em] uppercase">
          Project Details — 2026
        </span>

        <h2 className="text-xl sm:text-3xl lg:text-4xl
          font-black uppercase leading-tight
          mt-3 mb-4 pr-8">
          {selectedProject.nama}
          <span className="text-red-600">.</span>
        </h2>

        <p className="text-xs sm:text-sm
          leading-[1.9] text-neutral-400
          max-w-3xl">
          {selectedProject.desk}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-6 sm:mt-8">

          <h3 className="text-[10px] sm:text-xs
            font-bold tracking-widest
            uppercase mb-3">
            Technologies Used
          </h3>

          <div className="flex flex-wrap gap-2">

            {selectedProject.tools?.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-2 rounded-lg
                  text-[10px] sm:text-xs
                  border border-red-900/50
                  bg-red-950/40 text-red-300"
              >
                {tool}
              </span>
            ))}

          </div>
        </div>

        {/* PROJECT LINK */}
        {selectedProject.link && (
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center
              justify-center gap-3
              mt-7 sm:mt-8
              w-full sm:w-auto
              px-6 py-3.5 rounded-full
              bg-red-600 hover:bg-red-700
              text-white text-[10px] sm:text-xs
              font-bold uppercase tracking-wider
              transition-all hover:-translate-y-1"
          >
            Visit Live Project
            <i className="ri-arrow-right-up-line text-base" />
          </a>
        )}

        {/* BOTTOM LABEL */}
        <div className="flex justify-between
          items-center mt-8 pt-4
          border-t border-white/10">

          <span className="text-[8px] sm:text-[9px]
            tracking-widest text-neutral-500">
            PORTFOLIO / PROJECTS
          </span>

          <span className="text-[8px] sm:text-[9px]
            tracking-widest text-red-500">
            PROJECT PREVIEW
          </span>

        </div>

      </div>

    </div>
  </div>
)}


    </section>
    
  );
}

export default Portfolio;
