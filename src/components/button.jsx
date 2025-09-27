import { useTheme } from "../scripts/ThemeContext";

import "../styles/button.css";

export default function Button({nome, btnClasses, onClick}) {
    const { theme } = useTheme();

    const appStyle = {
        "--color-texto": theme.colors.texto,
        "--color-cinza": theme.colors.cinza,
        "--color-verdePrincipal": theme.colors.verdePrincipal,
        "--color-bg": theme.colors.background
    }

    const btnButtonClasses = `btn ${btnClasses}`;

    return (

        <button className={btnButtonClasses} style={appStyle} onClick={onClick}>{nome}</button>

    )
}