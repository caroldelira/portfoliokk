import { useTheme } from "./ThemeContext";

import linkedin from "../icons/linkedin.svg";
import whatsapp from "../icons/whatsapp.svg";
import email from "../icons/email.svg";

import "../styles/footer.css";

export default function Footer({menu = true}) {
    const { theme } = useTheme();
 
    const appStyle = {
        "--color-verde-escuro": theme.colors.verdeEscuro,
        "--color-texto": theme.colors.texto
    }

    return (
        <footer id="contatos" className="footer" style={appStyle}>
            {menu &&
                <nav className="menuFooter">
                    <ul style={{color: theme.colors.texto}}>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#sobreMim">Sobre mim</a></li>
                        <li><a href="#projetos">Trabalhos</a></li>
                        <li><a href="#contatos">Contato</a></li>
                    </ul>
                </nav>
            }
            <div className="contatos">
                <ul>
                    <li><a href="https://www.linkedin.com/in/ctavaresdsgn" target="_blank" rel="noreferrer"><img src={linkedin} alt="acesso ao linkedin do designer Cacá Tavares" /></a></li>
                    <li><a href="https://wa.me/+55081987425061/?text=Olá%20Cacá%20Tavares,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" target="_blank" rel="noreferrer"><img src={whatsapp} alt="acesso ao whatsapp do designer Cacá Tavares" /></a></li>
                    <li><a href="mailto:ctavares.visual@gmail.com?subject=Olá%20Cacá%20Tavares,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" target="_blank" rel="noreferrer" title="ctavares.visual@gmail.com"><img src={email} alt="acesso ao email do designer Cacá Tavares" /></a></li>
                </ul>
            </div>
            <div>
                <span className="nomeDesigner">Cacá Tavares - Designer</span>
            </div>
        </footer>
    )
}
