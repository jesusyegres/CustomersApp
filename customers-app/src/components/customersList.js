import React from 'react';
import PropTypes from 'prop-types';
import customersListItem from './customersListItem';

const customersList = ({customers}) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map( c => 
                        <customersListItem
                            key={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}>
                        </customersListItem>
                    )
                }
            </div>
        </div>
    );
};

customersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath:PropTypes.string.isRequired,
};

export default customersList;