import { useTheme } from "./ThemeContext";

import Button from "../components/button";
import Cards from "../components/cards";

import card1 from "../images/cards/image1.png";
import card2 from "../images/cards/image2.png";
import card3 from "../images/cards/image3.png";
import card4 from "../images/cards/image4.png";
import card5 from "../images/cards/image5.png";
import card6 from "../images/cards/image6.png";
import card7 from "../images/cards/image7.png";
import card8 from "../images/cards/image8.png";
import card9 from "../images/cards/image9.png";
import card10 from "../images/cards/image10.png";
import card11 from "../images/cards/image11.png";

import "../styles/myProjects.css";

export default function MyProjects() {
    const { theme } = useTheme();
    
    const appStyle = {
        "--color-verde": theme.colors.verdePrincipal
    }

    return (
       <section id="projects" style={appStyle}>
            <header>
                <h2>Meus <span style={{color: theme.colors.verdePrincipal}}>Trabalhos</span></h2>
                
                <nav className="filter">
                    <Button btnClasses="active" nome="Todos" />
                    <Button nome="Marcas" />
                    <Button nome="Mídia Kit" />
                    <Button nome="Redes Sociais" />
                    <Button nome="Homenagens" />
                </nav>
            </header>

            <div className="gridCards">
                <Cards 
                    titulo={'Aplicações - 200 anos Diario de Pernambuco'}
                    caminho={card1}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                <Cards 
                    titulo={'Posts criados para o Instagram da Rádio Clube FM.'}
                    caminho={card2}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                <Cards 
                    titulo={'Posts criados para o feed do Instagram do Esportes DP durante a Copa América.'}
                    caminho={card3}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                <Cards 
                    titulo={'Idéia, nome e visual criados para o departamento de esportes do diario de pernambuco.'}
                    caminho={card4}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                <Cards 
                    titulo={'Homenagens'}
                    caminho={card5}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                <Cards 
                    titulo={'Posts criados para o Instagram da Drift Lifestyle.'}
                    caminho={card6}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                <Cards 
                    titulo={'Marca e layout de projeto criados para o Diariocast.'}
                    caminho={card7}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                <Cards 
                    titulo={'Anúncios criados para a Rádio Clube de Pernambuco.'}
                    caminho={card8}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                <Cards 
                    titulo={'Renato Andrade - Bartender'}
                    caminho={card9}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                <Cards 
                    titulo={'Marca criada para TEM PROMO AÍ. um app de promoções de supermercados.'}
                    caminho={card10}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                <Cards 
                    titulo={' Capas para projetos comerciais e mídia kit feitas para o Diario de Pernambuco.'}
                    caminho={card11}
                    alt={'Duas agendas em tons azuis com a marca dos 200 anos do Diário de Pernambuco'}
                    link={'#'}
                />
                
                <img src="../images/cards/image1.png" alt="" srcset="" />
            </div>

       </section>
    )
}