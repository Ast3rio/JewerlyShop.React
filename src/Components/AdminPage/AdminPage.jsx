import React from 'react';
import style from './AdminPage.module.scss';
//Modules
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import AdminMenu from './AdminMenu';
import AdminSubs from './AdminSubs';
import AdminMessages from './AdminMessages';
import AdminOrders from './AdminOrders';
import AdminControl from './AdminControl';

const AdminPage = () => {
    return (
        <section className={style.wrapper}>
            <AdminMenu />
            <Switch >
                <Route path='/admin/subs' component={AdminSubs} />
                <Route path='/admin/messages' component={AdminMessages} />
                <Route path='/admin/orders' component={AdminOrders} />
                <Route path='/admin/control' component={AdminControl} />
            </Switch>
        </section>
    )
}

export default AdminPage;