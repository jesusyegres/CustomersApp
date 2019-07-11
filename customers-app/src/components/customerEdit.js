import React from 'react';
import PropTypes from 'prop-types';

const customerEdit = ({name,dni,age}) => {
    return (
        <div>
            <h2>Edicion Cliente:</h2>
            <h3>Nombre: {name} / DNI: {dni} / Edad:{age}</h3>
        </div>
    );
};

customerEdit.propTypes = {
    name:PropTypes.string,
    dni:PropTypes.string,
    age:PropTypes.number,
};

export default customerEdit;