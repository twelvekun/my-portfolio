import { useState, useEffect } from "react";

const useTheme = () => {
  // Cek local storage saat awal load, jika tidak ada langsung PAKSA ke "light"
  const getInitialTheme = () => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    
    // KUNCI UTAMA: Hapus deteksi prefers-color-scheme, langsung return "light"
    return "light"; 
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Efek samping: Update class di HTML dan LocalStorage setiap kali theme berubah
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log('Theme changed to:', theme, 'Dark class on html:', root.classList.contains('dark'));
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
