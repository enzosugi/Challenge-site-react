import React from 'react'
import Atendimento from '../atendimento/Atendimento'
import Contato from '../contato/Contato'
import Servicos from '../servicos/Servicos'
import Sobre from '../sobre/Sobre'


export default function Conteudo() {
    return (
        <>
            <Atendimento/>
            <Servicos/>
            <Sobre/>
            <Contato/>
        </>
    )
}