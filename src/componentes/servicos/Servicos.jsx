import React from 'react'
import Terapia from '../img/terapia.png'
import Estresse from '../img/estresse.png'
import Ansiedade from '../img/ansiedade.png'
import './Servicos.css'

export default function Servicos() {
    return (
        <div className="servicos">
            <div className="desc_servicos">
                <h1>SERVIÇOS</h1>
                <p>Atendimento psicológico emergencial a pessoas afetadas por crise de ansiedade.</p>
            </div>

            <div className="imagens_servicos">
                <div className="terapia">
                    <figure className="img_terapia">
                        <img src={Terapia} alt="terapia"></img>
                    </figure>
                    <p>Atendimento 24 horas, 7 dias por semana</p>
                </div>
                <div className="estresse">
                    <figure className="img_estresse">
                        <img src={Estresse} alt="estresse"></img>
                    </figure>
                    <p>Tristeza e estado depressivo</p>
                </div>
                <div className="ansiedade">
                    <figure className="img_ansiedade">
                        <img src={Ansiedade} alt="ansiedade"></img>
                    </figure>
                    <p>Mente agitada e ansiedade</p>
                </div>
            </div>
        </div>
    )
}