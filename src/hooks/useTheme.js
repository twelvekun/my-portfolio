import { useState, useEffect } from "react";

const useTheme = () => {
  // Cek local storage atau preferensi sistem saat awal load
  const getInitialTheme = () => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
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