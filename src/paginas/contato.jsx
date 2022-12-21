import React from "react";
import Menu from "../components/Menu";
import './contato.css'
import fotoBia from "../image/Bia.jpg"


export default function contato() {
    return (
        <div>
            <Menu />
            <h1 id="tituloHomenagem">HomeNagem a Nossa Querida Prof</h1>
            <p className="sora">#Biamichelle Miranda</p>
            <p className="sora">#testar É de Graça</p>
            <img src={fotoBia} alt='fotoBia' id='fotoBia' />
        </div>   
)}