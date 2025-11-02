const { createContext, useState, useContext, useEffect } = require('react');

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = e => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false);
  };
  const setColor = color => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  };

  // keep document root in sync with currentMode so tailwind's `dark:` and
  // other global styles can react to theme changes. Also set body background.
  useEffect(() => {
    if (currentMode === 'Dark') {
      try {
        document.documentElement.classList.add('dark');
        document.body.style.background = '#33373E';
      } catch (e) {
        // ignore server-side rendering or test envs where document may be undefined
      }
    } else {
      try {
        document.documentElement.classList.remove('dark');
        document.body.style.background = '';
      } catch (e) {}
    }
  }, [currentMode]);

  // HANDLE CLICK FUNCTION
  const handleClick = clicked =>
    setIsClicked({ ...initialState, [clicked]: true });
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setColor,
        setMode,
        currentMode,
        currentColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
