import { useState } from "react";
import { useTheme } from "./ThemeContext";

import Button from "../components/button";
import Cards from "../components/cards";

import data from "../dataCards/cards.json";

import "../styles/myProjects.css";

export default function MyProjects() {
    const [listCards, setListCards] = useState(data.cards);
    
    const { theme } = useTheme();
    
    const appStyle = {
        "--color-verde": theme.colors.verdePrincipal
    }

    function filtarCategoria(categoria, event) {
       if(categoria === "todos") {
            setListCards(data.cards);
            return;
       }

       const cardsFiltrados = data.cards.filter(card => card.categoria === categoria);
       setListCards(cardsFiltrados);
    }


    return (
       <section id="projects" style={appStyle}>
            <header>
                <h2>Meus <span style={{color: theme.colors.verdePrincipal}}>Trabalhos</span></h2>
                
                <nav className="filter">
                    <Button nome="Todos" onClick={(e) => filtarCategoria("todos", e)} btnClasses="active" />
                    <Button nome="Marcas" onClick={(e) => filtarCategoria("marcas", e)} />
                    <Button nome="Mídia Kit" onClick={(e) => filtarCategoria("projetos", e)} />
                    <Button nome="Redes Sociais" onClick={(e) => filtarCategoria("redesSociais", e)} />
                    <Button nome="Homenagens" onClick={(e) => filtarCategoria("homenagens", e)} />
                </nav>
            </header>

            <div className="gridCards">
                {listCards.map((card) => (
                    <Cards 
                        categoria={card.categoria}
                        titulo={card.titulo}
                        caminho={card.caminho}
                        link={card.link}
                        key={card.id}
                    />
                ))}
            </div>
       </section>
    )
}
