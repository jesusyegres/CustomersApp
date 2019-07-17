import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/customersList';
import CustumersActions from '../components/custumersActions';

import { withRouter } from 'react-router-dom';
import {fetchCustomers} from './../actions/fecthCustomers';
import { getCustomers } from '../selectors/customers';



class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }
    

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
                    body={this.renderBody(this.props.customers)}></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};


CustomersContainer.defaultProps = {
    customers : [  ],
}

const mapStateToProps = state => ({
    customers: getCustomers(state)
})


export default withRouter(connect(mapStateToProps,{fetchCustomers})(CustomersContainer));