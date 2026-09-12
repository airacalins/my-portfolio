import { createContext, useEffect, useState } from 'react';
import About from '../../features/about/About';
import Contact from '../../features/contact/Contact';
import Experience from '../../features/experience/Experience';
import Home from '../../features/home/Home';
import Project from '../../features/projects/Project';
import Footer from '../components/footer/Footer';
import NavMenu from '../components/navMenu/NavMenu';

interface ThemeContextValue {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

const THEME_STORAGE_KEY = 'aira-portfolio-theme';

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return true;
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored) return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    window.localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <NavMenu />
      <main>
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
