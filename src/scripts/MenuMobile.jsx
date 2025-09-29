import { useTheme } from "./ThemeContext";
import closeIcon from "../icons/close.svg";
import "../styles/menuMobile.css";
 
export default function MenuMobile({ isOpen, onClose }) {
    const { theme } = useTheme();
 
    const appStyle = {
        "--color-texto": theme.colors.texto,
        "--color-bg": theme.colors.background,
    };
 
    return (
        <div className={`menu-mobile-overlay ${isOpen ? 'open' : ''}`} style={appStyle}>
            <button className="close-button" onClick={onClose}>
                <img src={closeIcon} alt="Fechar menu" />
            </button>
            <nav>
                <ul>
                    {/* Ao clicar em um link, o menu também fecha */}
                    <li><a href="#hero" onClick={onClose}>Início</a></li>
                    <li><a href="#sobreMim" onClick={onClose}>Sobre mim</a></li>
                    <li><a href="#projetos" onClick={onClose}>Trabalhos</a></li>
                    <li><a href="#contatos" onClick={onClose}>Contato</a></li>
                </ul>
            </nav>
        </div>
    );
}