import React, { useEffect, useState } from "react"
import './Portal.css'
import Barra from "../../Componentes/Barra"
import CardSitucao from "../../Componentes/Card"
import axios from "axios"

function Portal() {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('https://localhost:44346/cliente/GetInfo?codigo=000001')
            .then(
                function (res) {
                    setData(res.data)
                    console.log(data)
                }
            )
    }, [])

    return (
        <>
            <header>
                <Barra />
            </header>

            <div className="card">
                <CardSitucao
                    nome={data.nome}
                    cidade={data.cidade}
                    uf={data.uf}
                    situacao={data.situacao}
                // IMG= {data.img}                    
                />
            </div>

            <footer>
            </footer>
        </>
    )
}

export default Portal