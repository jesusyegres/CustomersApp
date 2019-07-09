import React from 'react';
import PropTypes from 'prop-types';

const custumersActions = ({children}) => {
    return (
        <div>
            <div className="customers-actions">
                <div>{children}</div>
            </div>
        </div>
    );
};

custumersActions.propTypes = {
    children:PropTypes.node.isRequired,
};

export default custumersActions;