import PropTypes from "prop-types";
import { useState } from "react";
import { GrupoInput } from "./GrupoInput";


export const Formulario = (props) => {
    const [data, setData] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [valor, setValor] = useState(0);

    function validarDados() {
        if (!data || !quantidade || !valor) {
        alert("Preencha todos os campos para prosseguir!");
        return false;
        }
        return true;
    }

    function handleAdicionarNegociacao () {
        event.preventDefault();
        if (validarDados()) {
            const negociacao = {
                data: data,
                quantidade: quantidade,
                valor: valor
            };
            props.quandoAdicionar(negociacao);

            setData("");
            setQuantidade(0);
            setValor(0);
        }
    }

    return(
        <form className="form container">
                <div className="row">
                <GrupoInput
                    id="data"
                    etiqueta="Data"
                    tipo="date"
                    valor={data}
                    aoDigitar={(event) => setData(event.target.value)}
                />
                <GrupoInput
                    id="quantidade"
                    etiqueta="Quantidade"
                    tipo="number"
                    min={1}
                    step={1}
                    valor={Number(quantidade)}
                    aoDigitar={(event) => setQuantidade(event.target.value)}
                />
                <GrupoInput
                    id="valor"
                    etiqueta="Valor"
                    tipo="number"
                    min={1}
                    step={0.01}
                    valor={Number(valor)}
                    aoDigitar={(event) => setValor(event.target.value)}
                />

                <div className="col-1 d-flex align-items-end justify-content-end">
                    <button className="btn btn-primary" type="button" onClick={handleAdicionarNegociacao}>Incluir</button>
                </div>
            </div>
        </form>        
    )
}

Formulario.propTypes = {
    quandoAdicionar: PropTypes.func.isRequired,
};