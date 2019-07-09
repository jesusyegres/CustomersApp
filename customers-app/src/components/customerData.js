import React from 'react';
import PropTypes from 'prop-types';

const customerData = ({name,dni,age}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>
                    Datos del Cliente
                </h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Edad</strong><i>{age}</i></div>
            </div>
        </div>
    );
};

customerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age:PropTypes.number,
    //aqui se colocara los prototypes
};

export default customerData;