import React, { createContext, useState } from 'react';

 const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const style = {
    color:theme === "light" ? 'black' : 'white'
  };
  return (
    <>
    <ThemeContext.Provider value={{ theme, toggleTheme, style }}>
        {children}
    </ThemeContext.Provider>
    </>
  )
}

export {ThemeContext, ThemeProvider} 