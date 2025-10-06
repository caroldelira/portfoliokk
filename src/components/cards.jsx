import { useTheme } from "../scripts/ThemeContext";

import { Link } from "react-router-dom";
import "../styles/cards.css";

export default function Cards({titulo, caminho, link, categoria}) {
    const { theme } = useTheme();
    
    const appStyle = {
        "--color-verde": theme.colors.verdePrincipal,
        "--color-cinza": theme.colors.cinza,
        "--color-bg": theme.colors.bg,
        "--color-texto": theme.colors.texto
    }

    return (
        <div className="conteinerCard" style={appStyle} data-categoria={categoria}>
            <header>
                <h3>{titulo}</h3>
            </header>
            <div className="conteudoCard">
                <Link to={link}>
                    <img src={caminho} alt={titulo} />
                    Ver mais
                </Link>
            </div>
        </div>
    )
}