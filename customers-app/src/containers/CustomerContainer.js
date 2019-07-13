import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/customersList';
import CustumersActions from '../components/custumersActions';
import { withRouter } from 'react-router-dom';

const customers = [
    {
        "dni":"270003230",
        "name":"jesus",
        "age":32
    },
    {
        "dni":"272300",
        "name":"javier",
        "age":10
    },
    {
        "dni":"270000",
        "name":"yegres",
        "age":2
    },
];

class CustomersContainer extends Component {

    handleAddNew = () => {
        this.props.history.push('/customers/new')
    }

    renderBody = customers => (
        <div>
        <CustomersList customers={customers} 
        urlPath={'customers/'}
        >
        </CustomersList>
        <CustumersActions>
            <button
                onClick={this.handleAddNew}>
                    Nuevo Cliente
            </button>
        </CustumersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado De Clientes'}
                    body={this.renderBody(customers)}></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);