import React from 'react';
import sobreNos from '../img/sobre_nos.png';
import './Sobre.css'

export default function Sobre() {
    return (
        <div className="sobre">
            <div className="desc_sobre">
                <h1>SOBRE NÓS</h1>
                <p>Projeto desenvolvido pelo perceptível aumento de ansiedade após o início da pandemia.</p>
            </div>

            <div className="conteudo_sobre">
                <div className="imagem_sobre">
                    <img src={sobreNos} alt="batendo papo"></img>
                </div>

                <div className="texto_sobre">
                    <p>     
                        &nbsp;&nbsp;&nbsp;&nbsp;Um estudo realizado pela Universidade
                        do Estado do Rio de Janeiro (UEFJ) entre Março e Abril de 2020 demonstrou que 80% da população
                        brasileira tornou-se mais ansiosa logo após o início do isolamento social.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;A partir deste perceptível aumento da ansiedade nasceu
                        o Rocket Team, que desenvolveu uma plataforma capaz de conectar as pessoas que estiverem passando
                        por uma crise de ansiedade com profissionais aptos a prestar atendimento emergencial, 
                        tornando possível amenizar os sintomas e auxiliar o indivíduo a lidar com a mesma da
                        maneira adequada.
                    </p>
                </div>
            </div>
        </div>
    )
}