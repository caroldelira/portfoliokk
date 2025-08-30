import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState({
        colors: {
            background: "#050C04",
            verdePrincipal: "#1EF600",
            verdeEscuro: "#139900",
            texto: "#EEEEEE",
            cinza: "#393E467F"
        }
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext)
    return context;
};