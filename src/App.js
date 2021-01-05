import React from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

const Main = React.lazy(() => import('./Components/Main/Main'));
const Store = React.lazy(() => import('./Components/Store/Store'));
const Brand = React.lazy(() => import('./Components/Brand/Brand'));
const Delivery = React.lazy(() => import('./Components/Delivery/Delivery'));
const Refund = React.lazy(() => import('./Components/Refund/Refund'));
const Contacts = React.lazy(() => import('./Components/Contacts/Contacts'));
const AdminPage = React.lazy(() => import('./Components/AdminPage/AdminPage'));
const Order = React.lazy(() => import('./Components/Order/Order'));

function App() {

  const admin = useSelector(state => state.auth.admin);

  return (
    <>
      <Header />
      <hr />
      <div className='container'>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/main' component={Main} />
            <Route path='/store' component={Store} />
            <Route path='/brand' component={Brand} />
            <Route path='/delivery' component={Delivery} />
            <Route path='/refund' component={Refund} />
            <Route path='/contacts' component={Contacts} />
            {admin ? <Route path='/admin' component={AdminPage} /> : <Redirect from='/admin' to='/main' />}
            <Route path='/order' component={Order} />
            <Redirect from="/*" to="/main" />
          </Switch>
        </Suspense>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default App;
