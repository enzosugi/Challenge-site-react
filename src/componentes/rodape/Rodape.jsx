import React from 'react'
import logoRodape from '../img/logo_completo_rodape.png'
import Instagram from '../img/instagram.png'
import Facebook from '../img/facebook.png'
import Wpp from '../img/whatsapp.png'
import './Rodape.css'


export default function Rodape() {
    return(
        <footer className="rodape">
            <div className="conteudo_rodape">
                <div className="rocket_team">
                    <img src={logoRodape} alt="rocket_team"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, sed repellat.
                    </p>
                </div>

                <div className="meio_rodape">
                    <h2>Lorem ipsum</h2>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Lorem ipsum</a>
                            </li>
                            <li>
                                <a href="#">Lorem ipsum</a>
                            </li>
                            <li>
                                <a href="#">Lorem ipsum</a>
                            </li>
                            <li>
                                <a href="#">Lorem ipsum</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="redes_sociais">
                    <h2>Redes Sociais</h2>
                    <ul>
                        <li>
                            <a href="#"><img src={Instagram} alt="logo instagram" width="30"/></a>
                        </li>
                        <li>
                            <a href="#"><img src={Facebook} alt="logo facebook" width="30"/></a>
                        </li>
                        <li>
                            <a href="#"><img src={Wpp} alt="logo whatsapp" width="30"/></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; Rocket Team 2021 - All rights reserved</p>
            </div>
        </footer>
    )
}