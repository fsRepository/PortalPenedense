import './style.css'

function Formulario(props) {
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} required={props.obrigatorio} placeholder={props.placeholder} type={props.type} onChange={props.on} />
        </div>
    )
}

export default Formulario