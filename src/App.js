import React from 'react';
import './App.scss';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Brand from './Components/Brand/Brand';
import Delivery from './Components/Delivery/Delivery';
import Refund from './Components/Refund/Refund';
import Contacts from './Components/Contacts/Contacts';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Store from './Components/Store/Store';
import { Provider } from 'react-redux';
import store from './Redux/store';


function App() {
  return (
    <HashRouter >
      <Provider store={store}>
    <div>
      <Header />
      <hr />
      <div className='container'>
        <Switch>
          <Route path='/main' component={Main} />
          <Route path='/store' component={Store} />
          <Route path='/brand' component={Brand} />
          <Route path='/delivery' component={Delivery} />
          <Route path='/refund' component={Refund} />
          <Route path='/contacts' component={Contacts} />
          <Redirect from="/*" to="/main" />
        </Switch>
      </div>
      <hr />
      <Footer />
    </div>
    </Provider>
    </HashRouter>
  );
}

export default App;
