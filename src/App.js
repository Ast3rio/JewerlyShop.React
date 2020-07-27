import React from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Store from './Components/Store/Store';
import Brand from './Components/Brand/Brand';
import Delivery from './Components/Delivery/Delivery';
import Refund from './Components/Refund/Refund';
import Contacts from './Components/Contacts/Contacts';
import MainContainer from './Components/Main/MainContainer';
import HeaderContainer from './Components/Header/HeaderContainer';


function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Switch>
        <Route path='/main' component={MainContainer} />
        <Route path='/store' component={Store} />
        <Route path='/brand' component={Brand} />
        <Route path='/delivery' component={Delivery} />
        <Route path='/refund' component={Refund} />
        <Route path='/contacts' component={Contacts} />
        <Redirect from="/" to="/main" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
