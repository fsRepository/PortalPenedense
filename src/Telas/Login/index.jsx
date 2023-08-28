import React, { useEffect, useState } from "react";
import Formulario from "../../Componentes/Fomulario";
import './style.css'
import Logo from '../../img/logoPenedense.png'
import Portal from "../Portal/Portal";
import axios from "axios";

function Login() {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [user, setUser] = useState(false)
    

    function getUser(e) {
        setLogin(e.target.value)        
    }
    function getSenha(e) {
        setSenha(e.target.value)
    }

    function sign() {
        axios.get(`https://penedenseapinode.onrender.com/login?user=${login}&senha=${senha}`)
            .then((res) => {
                if (res.data == true) {                    
                    setUser(true);
                    acessar();
                } else {
                    setUser(false);
                    invalido();                    
                }
            })
            .catch((error) => console.log(error))
    }

    // useEffect(() => {
    // })

    function acessar() {
        if (login == '' || senha == '') {
            alert('Verifique os campos em branco')
        }
        else {            
            localStorage.setItem("codigo", location.pathname.substring(1));
            setTimeout(() => {
                window.location.assign('/Portal')
            }, 1500);
            return <Portal />
        }
    }

    function invalido() {
        alert('Usuário ou senha inválidos');
    }

    return (
        <div className="login">
            <form>
                <div className="cabecalho">
                    <img src={Logo} alt="" />
                    <h2>Olá Logista, Faça Seu Login</h2>
                </div>
                <Formulario
                    value={login}
                    type='text'
                    obrigatorio={true}
                    placeholder='Usuário'
                    on={(e) => getUser(e)}
                />
                <Formulario
                    value={senha}
                    obrigatorio={true}
                    type='Password'
                    placeholder='Senha'
                    on={(value) => getSenha(value)}
                />
                <button
                    type='button'
                    onClick={() => sign()}
                >
                    CONTINUAR
                </button>
            </form>
        </div>
    )
}

export default Login