import React from 'react'
import Logo from '../img/logo_completo.png'
import fotoPerfil from '../img/perfil.png'
import './Header.css'

export default function Header() {
    return(
        <header className="nav-bar">
            <div className="header">
                <div className="logo">
                    <a href="#">
                        <img src={Logo} alt="logo"></img>
                    </a>
                </div>

                <div className="menu">
                    <nav>
                    <ul>
                        <li>
                            <a href="#">INÍCIO</a>
                        </li>
                        <li>
                            <a href="#">SERVIÇOS</a>
                        </li>
                        <li>
                            <a href="#">SOBRE</a>
                        </li>
                        <li>
                            <a href="#">CONTATO</a>
                        </li>
                    </ul>
                    </nav>
                </div>

                <div className="perfil">
                    <a href="#">
                        <img className="imagem-perfil" src={fotoPerfil} alt="imagem"></img>
                    </a>
                </div>
            </div>
        </header>
    )
}