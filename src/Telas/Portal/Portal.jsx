import React, { useEffect, useState } from "react"
import './Portal.css'
import Barra from "../../Componentes/Barra"
import CardSitucao from "../../Componentes/Card"
import axios from "axios"

function Portal() {
    const [data, setData] = useState({});
    const codigo = location.pathname.substring(1);

    useEffect(() => {
        axios.get(`http://penedenseapi.focosistemas.net/cliente/getinfo?codigo=${codigo}`)
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
                {
                    data.situacao === 0 ?
                        < CardSitucao
                            nome={data.nome}
                            cidade={data.cidade}
                            uf={data.uf}
                            situacao="Ativo"
                        // IMG= {data.img}                    
                        /> :
                        < CardSitucao
                            nome={data.nome}
                            cidade={data.cidade}
                            uf={data.uf}
                            situacao="Inativo"
                        // IMG= {data.img}                    
                        />
                }
            </div>
        </>
    )
}

export default Portal