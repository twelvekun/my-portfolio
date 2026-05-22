import React, { useRef, useState } from 'react';
import useTheme from '../hooks/useTheme';

function PokerCards({ images = [], maxCards = 3 }) {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [theme] = useTheme();

  // Selalu render semua kartu agar animasi transisi posisinya bisa berjalan mulus
  const displayImages = images.slice(0, maxCards);

  function getCardStyle(index) {
    // Menentukan indeks tengah (jika 3 kartu, tengahnya adalah indeks 1)
    const centerIndex = Math.floor(displayImages.length / 2);
    // Menghitung posisi: -1 (kiri), 0 (tengah), 1 (kanan)
    const offsetMultiplier = index - centerIndex; 
    
    // Z-Index dasar: Kartu tengah selalu di atas (paling depan)
    const baseZIndex = 10 - Math.abs(offsetMultiplier);

    // --- STATE 1: KONDISI AWAL (Belum di-hover) ---
    if (!isExpanded) {
      const isCenter = index === centerIndex;
      return {
        // Semua kartu ditumpuk persis di tengah, lurus, dan ukurannya besar (scale 1)
        transform: `translateX(0px) translateY(0px) rotateZ(0deg) scale(1)`,
        zIndex: baseZIndex,
        // Kartu kiri dan kanan diubah transparan di awal agar efek glassmorphism 
        // tidak menumpuk dan terlihat kotor di belakang kartu utama
        opacity: isCenter ? 1 : 0, 
      };
    }

    // --- STATE 2: KONDISI TERBUKA (Saat container di-hover) ---
    const spreadX = 120; // Jarak sebaran kartu ke kiri dan kanan (px)
    const baseTranslateX = offsetMultiplier * spreadX;
    const baseTranslateY = Math.abs(offsetMultiplier) * 20; // Kartu samping sedikit turun
    const baseRotation = offsetMultiplier * 15; // Rotasi menyamping (-15deg, 0, 15deg)

    // Jika sedang terbuka, tapi belum ada kartu spesifik yang disorot
    if (hoveredIndex === null) {
      return {
        // Scale diperkecil (0.85) agar ketiga kartu muat di layar saat menyebar
        transform: `translateX(${baseTranslateX}px) translateY(${baseTranslateY}px) rotateZ(${baseRotation}deg) scale(0.85)`,
        zIndex: baseZIndex,
        opacity: 1, // Munculkan kembali kartu yang ada di samping
      };
    }

    // Jika ada satu kartu spesifik yang disorot kursor
    if (hoveredIndex === index) {
      return {
        transform: `translateX(${baseTranslateX}px) translateY(${baseTranslateY - 30}px) rotateZ(${baseRotation}deg) scale(0.95)`,
        zIndex: 20, // Bawa ke paling depan
        boxShadow: theme === 'dark'
          ? '0 20px 50px rgba(34, 211, 238, 0.3), 0 0 30px rgba(168, 85, 247, 0.2)'
          : '0 20px 50px rgba(34, 211, 238, 0.2), 0 0 30px rgba(168, 85, 247, 0.15)',
        opacity: 1,
      };
    }

    // Sisa kartu lainnya menjauh sedikit saat ada satu yang disorot
    const pushOffset = index > hoveredIndex ? 30 : -30;
    return {
      transform: `translateX(${baseTranslateX + pushOffset}px) translateY(${baseTranslateY + 15}px) rotateZ(${baseRotation}deg) scale(0.8)`,
      zIndex: baseZIndex,
      opacity: 0.6,
    };
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsExpanded(true)} 
      onMouseLeave={() => { 
        setIsExpanded(false);
        setHoveredIndex(null);
      }}
      // Mengatur ukuran container cukup luas untuk menampung animasi pelebaran kartu
      className="relative w-full max-w-[700px] h-[500px] flex items-center justify-center"
    >
      <div className="relative w-full h-full flex items-center justify-center perspective">
        {displayImages.map((img, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              if (isExpanded) setHoveredIndex(index);
            }}
            // Penambahan duration-500 membuat animasi membuka sangat halus
            className="absolute cursor-pointer transition-all duration-500 ease-out"
            style={{
              ...getCardStyle(index),
              transformStyle: 'preserve-3d',
            }}
          >
            {/* 
              Ukuran kartu diatur di sini menjadi besar: w-[320px] dan h-[420px] 
              Ini setara dengan instruksi tegak besar Anda
            */}
            <div className={`rounded-2xl overflow-hidden w-[320px] h-[420px] relative group border-2 transition-colors duration-500 ${
              theme === 'dark'
                ? 'border-transparent group-hover:border-cyan-400/60'
                : 'border-transparent group-hover:border-cyan-400/40'
            }`}>
              {/* Gradient Border Background */}
              <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                  : 'bg-gradient-to-r from-cyan-400 to-purple-400'
              }`}></div>

              {/* Card Background with Glassmorphism */}
              <div className={`relative w-full h-full backdrop-blur-xl border rounded-2xl group-hover:border-cyan-400/60 transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border-cyan-400/30'
                  : 'bg-gradient-to-br from-cyan-100/40 to-purple-100/40 border-cyan-400/40'
              }`}>
                <img
                  src={img}
                  alt={`Card ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10'
                    : 'bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5'
                }`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-all {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default PokerCards;