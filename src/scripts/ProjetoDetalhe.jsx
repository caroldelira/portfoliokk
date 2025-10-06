import { useState, useRef } from "react";
import { useParams } from "react-router-dom";

import logo from "../images/logo.svg";

import Footer from "../scripts/Footer.jsx";

import { CSSTransition } from "react-transition-group";

import dataImg from "../dataCards/imgProjetos.json";

import { useTheme } from "./ThemeContext";
import "../styles/projetoDetalhe.css";

export default function ProjetoDetalhe() {
    const { theme } = useTheme();
    const {projeto: nomeProjeto } = useParams();

    const [imgAmpliada, setImgAmpliada] = useState();
    const [modalShow, setModalShow] = useState(false);

    const nodeRef = useRef(null);
    
    const projetos = dataImg.projetos;

    const projetoSelecionado = projetos.find(item => item.projeto === nomeProjeto);

    const appStyle = {
        "--color-texto": theme.colors.texto,
        "--color-verdePrincipal": theme.colors.verdePrincipal,
        "--color-verdeEscuro": theme.colors.verdeEscuro
    }

    function ampliarImagem(id) {
        const imagemSelecionada = projetoSelecionado.img[id];
        setImgAmpliada(imagemSelecionada);
        setModalShow(true);
    }

    function fecharModal() {
        setModalShow(false);
    }


    if(!projetoSelecionado) {
        return (         
            <main className="paginaNaoEcontrada" style={appStyle}>
                Esse projeto está em manutenção, <a href="/">clique aqui</a> para retornar para página inicial!
            </main>
        )
    }

    return (
        <main id="detalheProjeto" style={appStyle}>
            <header>
                <div className="header">
                    <img src={logo} alt="Imagem verde com a letra manuscrita CT que é a logo do designer" />
                    <a href="/">Ver outros projetos</a>
                </div>
            </header>
            <h1 id="tituloProjeto">{projetoSelecionado.descricao}</h1>
            <div className="gridImg">
                {projetoSelecionado.img.map((caminhoImagem, index) => (
                    <img key={index} src={caminhoImagem} alt={projetoSelecionado.projeto} onClick={() => ampliarImagem(index)}/>
                ))}
            </div>

            <CSSTransition
                in={modalShow}
                timeout={200}
                classNames="modal"
                unmountOnExit
                nodeRef={nodeRef}
            >
                <div className="modalImg" ref={nodeRef} >                
                    <img src={imgAmpliada} onClick={() => fecharModal()}/>               
                </div>
            </CSSTransition>
            
            <Footer menu={false} />
        </main>
    )
}