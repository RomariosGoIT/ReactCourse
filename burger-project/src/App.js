import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Chekout from './containers/Checkout/Checkout';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as action from './store/actions/index';

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSingup();
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Chekout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/logout" component={Logout}/>
            <Route path='/' component={BurgerBuilder}/>            
          </Switch>          
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onTryAutoSingup: () => dispatch(action.authCheckState())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
