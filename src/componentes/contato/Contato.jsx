import React from 'react'
import contatoImg from '../img/contato.png'
import './Contato.css'

export default function Contato() {
    return (
        <div className="contato">
            <div className="desc_contato">
                <h1>CONTATO</h1>
                <p>Ficou com alguma dúvida ou sugestão? Envie uma mensagem!</p>
            </div>

            <div className="formulario_contato">
                <form action="#" method="post">
                    <div className="form_nome">
                        <label htmlFor="idTxtNome">Nome:</label>
                        <input type="text" name="txtNome" id="idTxtNome" maxLength="60" required/>
                    </div>
                    <div className="form_email">
                        <label htmlFor="">E-mail:</label>
                        <input type="text" name="txtEmail" id="idTxtEmail" maxLength="60" required/>
                    </div>
                    <div class="form_mensagem">
                        <label htmlFor="idTxtMensagem">Digite aqui sua mensagem:</label>
                        <textarea type="text" name="txtMensagem" id="idTxtMensagem" required></textarea>
                    </div>
                    <div className="form_submit">
                        <input type="submit" value="ENVIAR"/>
                    </div>
                </form>

                <div className="imagem_contato">
                    <img src={contatoImg} alt="pessoas" />
                </div>
            </div>
        </div>
    )
}