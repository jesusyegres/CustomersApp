import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustumersActions from '../components/custumersActions';

class HomeContainer extends Component {

    handleOnClick = () =>{
        console.log("Handle On click");
        this.props.history.push("./customers");
    }

    render() {
        return (
            <div>
            <AppFrame
                header="Home"
                body={
                    <div>
                        Esta es la pantalla Inicial
                        <CustumersActions>
                            <button onClick={this.handleOnClick}>Listado de clientes</button>
                        </CustumersActions>                
                    </div>
                }
            >

            </AppFrame>
           </div>
        );
    }
}



export default withRouter(HomeContainer);