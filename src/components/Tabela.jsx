import PropTypes from "prop-types";
import { TabelaLinha } from "./TabelaLinha";

export const Tabela = ({ negociacoes }) => {

    function totalizador() {
        const valorTotal = negociacoes.reduce((totalizador, negociacao) => {
        return (
            totalizador + Number(negociacao.valor) * Number(negociacao.quantidade)
        );
        }, 0);
    
        return valorTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        });
    } 

    return(
        <div className="my-5">
            <table className="table table-hover table-bordered">
                <thead className="table-primary">
                    <tr>
                        <td>DATA</td>
                        <td>QUANTIDADE</td>
                        <td>VALOR</td>
                        <td>VOLUME</td>
                    </tr>
                </thead>

                <tbody>
                    {negociacoes.map((negociacao, index) => (
                            <tr key={index}>
                                <td>{negociacao.data}</td>
                                <td>{negociacao.quantidade}</td>
                                <td>{Number(negociacao.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td>{Number(negociacao.valor * negociacao.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                            </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr className="table-primary">
                        <td colSpan="3">TOTAL</td>
                        <td>{totalizador()}</td>
                    </tr>
                </tfoot>                
            </table>
        </div>
    );
};

Tabela.propTypes = {
    negociacoes: PropTypes.array.isRequired,
}