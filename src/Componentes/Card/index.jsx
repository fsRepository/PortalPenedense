import React, { useEffect, useState } from "react"
import './index.css'
import axios from "axios"
import Perfil from '../../img/perfil.png'

function CardSitucao(props) {

    return (
        <div className="divCard">
            <div className="head">
                <h2> {props.nome} </h2>
            </div>
            <div className="body">
                <img src={Perfil} alt="perfil" />
                <div className="info">
                    <p>Cidade: {props.cidade} - {props.uf} </p>
                    <p>Situação: {props.situacao} </p>
                </div>
            </div>
        </div>
    )
}

export default CardSitucao