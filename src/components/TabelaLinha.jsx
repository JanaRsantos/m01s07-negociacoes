import PropTypes from "prop-types";

function emReais(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export const TabelaLinha = ({ negociacao }) => {
    const { data, valor, quantidade } = negociacao;
    return (
        <tr>
            <td>{data}</td>
            <td>{Number(quantidade)}</td>
            <td>{emReais(Number(valor))}</td>
            <td>{emReais(Number(valor) * Number(quantidade))}</td>
        </tr>
        );
};

TabelaLinha.propTypes = {
    negociacao: PropTypes.shape({
    data: PropTypes.string.isRequired,
    quantidade: PropTypes.number.isRequired,
    }).isRequired,
}