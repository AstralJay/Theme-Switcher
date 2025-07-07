
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-6">
        {theme === 'light' ? '🌞' : '🌙'} Theme Switcher App
      </h1>
      <ThemeToggle />
    </div>
  );
}

export default App;
