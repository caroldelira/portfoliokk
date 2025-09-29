import imageDesigner from "../images/EuPort1.svg";
import logoLinkedin from "../images/logo-linkedin.png";
import arrowDown from "../icons/arrow-down.svg";
import videoBG from "../videos/bg-desk.mp4";
import videoBGMobile from "../videos/bg-mobile.mp4";

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

    const mobileScreen = window.screen.width <= 768;

    return (
        <section id="hero">
            <video className="video-bg" autoPlay loop muted playsInline>
                <source src={mobileScreen ? videoBGMobile : videoBG} type="video/mp4" />
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
                
                {mobileScreen &&
                    <div className="hero-image">
                        <img src={imageDesigner} alt="Cacá Tavares, designer, pronta para um projeto"/>
                    </div>
                }

                <div className="hero-actions">
                    <a id="link-contato" href="https://wa.me/+55081987425061/?text=Olá%20Cacá%20Tavares,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" target="_blank" rel="noreferrer">
                        Contato
                    </a>
                    <a id="link-linkedin" href="https://www.linkedin.com/in/ctavaresdsgn" target="_blank" rel="noreferrer">
                        <img src={logoLinkedin} alt="Acesso ao linkedIn" />
                    </a>
                </div>
            </div>

            {!mobileScreen &&
                <div className="hero-image">
                    <img src={imageDesigner} alt="Cacá Tavares, designer, pronta para um projeto"/>
                </div>     
            }

            {!mobileScreen &&
                <div className="icon-down">
                    <img src={arrowDown} alt="icone com seta para baixo" />
                </div>   
            }
        </section>
    )
}