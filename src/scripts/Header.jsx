import logo from "../images/logo.svg";

import "../styles/header.css";

import { useTheme } from "./ThemeContext"

export default function Header() {
    const { theme } = useTheme();

    const appStyle = {
        "--color-texto": theme.colors.texto
    }

    return (
        <header className="header" style={appStyle}>
            <img src={logo} alt="Imagem verde com a letra manuscrita CT que é a logo do designer"  />
            <nav className="menuHeader">
                <ul style={{color: theme.colors.texto}}>
                    <li><a href="#hero">Início</a></li>
                    <li><a href="#sobreMim">Sobre mim</a></li>
                    <li><a href="#projetos">Trabalhos</a></li>
                    <li><a href="#contatos">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}