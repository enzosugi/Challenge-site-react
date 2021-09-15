import React from "react";
import Meditacao from '../img/meditando.png'
import './Atendimento.css'

export default function Atendimento(){
    return(
        <div className="atendimento">
            <div className="atendimento_emergencial">
                <h1>ATENDIMENTO EMERGENCIAL</h1>
                <p>Está passando por uma crisa de ansiedade? Existem profissionais prontos para te ajudar!</p>

                <div>
                    <ul className="botao_atendimento">
                        <li>
                            <a class="inicia_atendimento" href="#">Quero ser atendido</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="meditando">
                <img src={Meditacao} alt="meditação"></img>
            </div>

        </div>
    )
}