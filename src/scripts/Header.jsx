import { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import menuMobileIcon from "../icons/menu.svg";
import MenuMobile from "./MenuMobile";
 
import "../styles/header.css";
 
import { useTheme } from "./ThemeContext";
 
export default function Header() {
    const { theme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
 
    const appStyle = {
        "--color-texto": theme.colors.texto,
    };
 
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
 
    return (
        <header style={appStyle}>
            {isMobile ? (
                <div className="headerMobile">
                    <img className="logoMobile" src={logo} alt="Imagem verde com a letra manuscrita CT que é a logo do designer" />
                    <button className="menuMobile" onClick={() => setIsMenuOpen(true)}>
                        <img src={menuMobileIcon} alt="Abrir menu" />
                    </button>
                    <MenuMobile isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                </div>
            ) : (
                <div className="header">
                    <img src={logo} alt="Imagem verde com a letra manuscrita CT que é a logo do designer" />
                    <nav className="menuHeader">
                        <ul style={{ color: theme.colors.texto }}>
                            <li><a href="#hero">Início</a></li>
                            <li><a href="#sobreMim">Sobre mim</a></li>
                            <li><a href="#projetos">Trabalhos</a></li>
                            <li><a href="#contatos">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}