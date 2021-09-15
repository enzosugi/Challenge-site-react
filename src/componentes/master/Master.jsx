import React from 'react'
import Conteudo from '../conteudo-pagina/Conteudo'
import Header from '../header/Header'
import Rodape from '../rodape/Rodape'
import './Master.css'

export default function Master() {
    return (
        <div className="container">
            <Header/>
            <div className="conteudo_pagina">
                <Conteudo/>
            </div>
            <Rodape/>
        </div>
    )
}