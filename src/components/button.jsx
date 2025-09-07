import { useTheme } from "../scripts/ThemeContext";

import "../styles/button.css";

export default function Button({nome, btnClasses}) {
    const { theme } = useTheme();

    const appStyle = {
        "--color-texto": theme.colors.texto,
        "--color-cinza": theme.colors.cinza,
        "--color-verdePrincipal": theme.colors.verdePrincipal,
        "--color-bg": theme.colors.background
    }

    const btnButtonClasses = `btn ${btnClasses}`;

    return (

        <button id="btn" className={btnButtonClasses} style={appStyle}>{nome}</button>

    )
}