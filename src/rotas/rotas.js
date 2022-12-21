import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Home from "../paginas/home"
import Elenco from "../paginas/elenco"
import Contato from "../paginas/contato"

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Elenco" element={<Elenco/>} />
        <Route path="/Contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>
  )
}