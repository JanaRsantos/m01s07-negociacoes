import PropTypes from "prop-types";

export const GrupoInput = (props) => {
    const { tipo, etiqueta, id, min, step, valor, aoDigitar } = props;

    return(
        <div className="form-group col">
            <label htmlFor={id}>{etiqueta}</label>
            <input 
                className="form-control" 
                type={tipo} 
                id={id}
                min={min}
                step={step} 
                value={valor}
                onChange={aoDigitar}
                required />
        </div>
    );
};

GrupoInput.propTypes = {
    id: PropTypes.string.isRequired,
    etiqueta: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    min: PropTypes.number,
    step: PropTypes.number,
    aoDigitar: PropTypes.func.isRequired,
};
