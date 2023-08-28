import React, { useEffect, useState } from "react"
import './Portal.css'
import Barra from "../../Componentes/Barra"
import CardSitucao from "../../Componentes/Card"
import axios from "axios"

function Portal() {
    const [data, setData] = useState({});
    const checkSituacao = (value) => {
        return value == 1 ? 'ATIVO' : 'INATIVO'
    }

    useEffect(() => {
        axios.get(`https://penedenseapinode.onrender.com/getinfo?codigo=${localStorage.getItem('codigo')}`)
            .then(
                function (res) {
                    setData(res.data);
                    localStorage.removeItem("codigo");
                }
            )
    }, [])

    return (
        <>
            <header>
                <Barra />
            </header>

            <div className="card">
                < CardSitucao
                nome={data.NOME}
                cidade={data.CIDADE}
                uf={data.UF}
                situacao={checkSituacao(data.SITUACAO)}
                // IMG= {data.img}                    
                /> 
            </div>
        </>
    )
}

export default Portal