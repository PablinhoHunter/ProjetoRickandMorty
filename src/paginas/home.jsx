import React from "react";
import Menu from "../components/Menu";
import './Home.css';
import ImagemRm from '../image/imagemRm.jpg'

export default function Home() {
    return (
        <section className="HomePrincipal">
            <Menu />
            <h2 id="tituloHome">Segunda parte da 6ª temporada de Rick and Morty ganha trailer com retorno de Dra. Wong</h2>
            <h3 id="subTituloHome">Um retorno que era muito esperado pelos fãs e foi confirmado!</h3>
            <img src={ImagemRm} alt='cardTemporadaSeis' id="cardTemporadaSeis" />
            <div className="textoHome">
                <p className="paragrafoHome">Na noite da última segunda-feira (7), a Adult Swim divulgou um novo trailer da segunda parte da sexta temporada de Rick and Morty.
                    O vídeo mostra cenas de mais aventuras malucas de Rick e Morty, além de confirmar o retorno de Susan Sarandon como Dra. Wong — algo que era muito esperado pelos fãs.</p>
                <p className="paragrafoHome">A segunda parte da sexta temporada de Rick and Morty retorna no dia 20 de novembro. A série animada exibe episódios inéditos aos domingos. No Brasil, a exibição ocorre pelo HBO Max.</p>
            </div>
        </section>

    )
}