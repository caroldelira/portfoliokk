import logo from "../images/logo.svg";

import "../styles/header.css";

import { useTheme } from "./ThemeContext"

export default function Header() {
    const { theme } = useTheme();

    return (
        <header className="header">
            <img src={logo} alt="Imagem verde com a letra manuscrita CT que é a logo do designer"  />
            <nav className="menuHeader">
                <ul style={{color: theme.colors.texto}}>
                    <li><a>Início</a></li>
                    <li><a>Sobre mim</a></li>
                    <li><a>Trabalhos</a></li>
                    <li><a>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}