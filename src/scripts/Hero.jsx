import imageDesigner from "../images/EuPort1.png";
import logoLinkedin from "../images/logo-linkedin.png";
import arrowDown from "../icons/arrow-down.svg"
import videoBG from "../videos/bg-desk.mp4";

import "../styles/hero.css";
import { useTheme } from "./ThemeContext";

export default function Hero() {
    const { theme } = useTheme();

    const appStyle = {
        "--color-verde": theme.colors.verdePrincipal,
        "--color-texto": theme.colors.texto,
        "--color-cinza": theme.colors.cinza,
        "--color-bg": theme.colors.background
    }

    return (
        <section id="hero">
            <video className="video-bg" autoPlay loop muted playsInline>
                <source src={videoBG} type="video/mp4" />
                Seu navegador não suporta vídeo dessa seção.
            </video>

            <div className="hero-content" style={appStyle}>
                <header>
                    <h1>
                        Cacá Tavares
                    </h1>
                    <h2>
                        DESIGNER
                    </h2>
                </header>
                <div className="hero-actions">
                    <a id="link-contato" href="#" target="_blank">
                        Contato
                    </a>
                    <a id="link-linkedin" href="#" target="_blank">
                        <img src={logoLinkedin} alt="Acesso ao linkedIn" />
                    </a>
                </div>
            </div>

            <div className="hero-image">
                <img src={imageDesigner} alt="Cacá Tavares, designer, pronta para um projeto"/>
            </div>
            
            <div className="icon-down">
                <img src={arrowDown} alt="icone com seta para baixo" />
            </div>
        </section>
    )
}