import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomerContainer';

class App extends Component {

  renderHome = () => <HomeContainer></HomeContainer>;
  
  renderCustomerContainer = () => <h1>Customer Container 1</h1>
  
  renderCustomerListContainer = () => <h1>Customer List Container 2</h1>
  
  renderCustomerNewContainer = () => <h1>Customer New Container 3</h1>

  render() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/customers" component={CustomersContainer}/>
        <Switch>
          <Route path="/customers/new" component={this.renderCustomerNewContainer} />
          <Route path="/customers/:dni" component={this.renderCustomerContainer} />
        </Switch>
        </div>
    </Router>

  );

  }
}

export default App;
