import { useTheme } from "./ThemeContext";

import Button from "../components/button";
import Cards from "../components/cards";

import data from "../dataCards/cards.json";

import "../styles/projetos.css";
import { useState } from "react";

export default function Projetos() {
    const [listCards, setListCards] = useState(data.cards);
    const [cardAtivo, setCardAtivo] = useState("todos");
    
    const { theme } = useTheme();
    
    const appStyle = {
        "--color-verde": theme.colors.verdePrincipal
    }

    function filtarCategoria(categoria) {
        if(categoria === "todos") {
            setListCards(data.cards);
            setCardAtivo(categoria); 
            return;
        }

       const cardsFiltrados = data.cards.filter(card => card.categoria === categoria);
       setListCards(cardsFiltrados);
       setCardAtivo(categoria); 
    }

    return (
       <section id="projetos" style={appStyle}>
            <header>
                <h2>Meus <span style={{color: theme.colors.verdePrincipal}}>Trabalhos</span></h2>
                
                <nav className="filter">
                    <Button nome="Todos" onClick={() => filtarCategoria("todos")} btnClasses={cardAtivo === "todos" ? "active" : ""} />
                    <Button nome="Marcas" onClick={() => filtarCategoria("marcas")} btnClasses={cardAtivo === "marcas" ? "active" : ""} />
                    <Button nome="Projetos" onClick={() => filtarCategoria("projetos")} btnClasses={cardAtivo === "projetos" ? "active" : ""} />
                    <Button nome="Redes Sociais" onClick={() => filtarCategoria("redesSociais")} btnClasses={cardAtivo === "redesSociais" ? "active" : ""} />
                    <Button nome="Homenagens" onClick={() => filtarCategoria("homenagens")} btnClasses={cardAtivo === "homenagens" ? "active" : ""} />
                </nav>
            </header>

            <div className="gridCards">
                {listCards.map((card) => (
                    <Cards 
                        categoria={card.categoria}
                        titulo={card.titulo}
                        caminho={card.caminho}
                        link={`./ProjetoDetalhe/${card.projeto}`}
                        key={card.id} 
                    />
                ))}
            </div>
       </section>
    )
}