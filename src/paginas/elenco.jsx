import React from "react"
import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import './elenco.css'

const Elenco = () => {
    const [busca, setBusca] = useState('')
    const [personagemFiltrado, setPersonagemFiltrado] = useState([0])
    const [personagem, setPersonagem] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(Response => Response.json())
            .then(data => setPersonagem(data.results))
    }, [])
    useEffect(() => {
        setPersonagemFiltrado(personagem.filter(personagem => personagem.name.includes(busca)))
    }, [personagem , busca])

    return (
        <>
        <Menu />
        <div>
            <h3>Confira OS personagens E suas Variantes de Outros Universo Da Trama</h3>
        </div>
        <input placeholder="Digite o nome do personagem" type='search' onChange={e => setBusca(e.target.value)}/> 
            {personagemFiltrado.map(personagem =>
            <div key={personagem.id}>
            <p>{personagem.name}</p>
            <img src={personagem.image} alt={personagem.name} />
        </div>
            )}
        </>

    )
}

export default Elenco
