import "../styles/sobreMim.css";
import logoPhotoshop from "../images/Photoshop.png";
import logoIlustrator from "../images/Ilustrator.png";
import logoAfterEffects from "../images/AfterEfectts.png";
import logoCorel from "../images/Corel.png";

import { useTheme } from "./ThemeContext";

export default function SobreMim() {
    const { theme } = useTheme();

    const appStyle = {
        "--color-verde": theme.colors.verdePrincipal,
        "--color-cinza": theme.colors.cinza
    }

    const mobileScreen = window.screen.width <= 768;
    
    return (
        <section id="sobreMim" style={appStyle}>
            <div className="about-content">
                <div className="about-card">
                    <h2>
                        Sobre <span className="color-verde">mim</span>
                    </h2>
                    <p>
                        Designer com mais de 10 anos de experiência, 
                        transformo ideias em visuais impactantes. 
                        Durante 5 anos no Grupo Diário de Pernambuco, 
                        aprimorei a habilidade de criar soluções visuais 
                        para campanhas de marketing, mídia impressa e digital. 
                        Sou movido pelo desafio de criar peças que se conectam 
                        com o público e alcançam os objetivos de cada projeto.
                    </p>
                </div>
            </div>
            <div className="about-experience">
                <h2>
                    Habilidades
                </h2>
                <ul className="images-experience">
                    <li><img src={logoPhotoshop} alt="Logo do Photoshop" /></li>
                    <li><img src={logoIlustrator} alt="Logo do Illustrator" /></li>
                    <li><img src={logoAfterEffects} alt="Logo do After Effects" /></li>
                    <li><img src={logoCorel} alt="Logo do Corel Drawn" /></li>
                </ul>
            </div>
        </section>
    );
};