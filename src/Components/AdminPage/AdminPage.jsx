import React from 'react';
import style from './AdminPage.module.scss';
import { Route, Switch } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import { Suspense } from 'react';

const AdminSubs = React.lazy(() => import('./AdminSubs'));
const AdminMessages = React.lazy(() => import('./AdminMessages'));
const AdminOrders = React.lazy(() => import('./AdminOrders'));
const AdminControl = React.lazy(() => import('./AdminControl'));

const AdminPage = () => {
    return (
        <section className={style.wrapper}>
            <AdminMenu />
            <Suspense fallback={<div>Loading...</div>}>
                <Switch >
                    <Route path='/admin/subs' component={AdminSubs} />
                    <Route path='/admin/messages' component={AdminMessages} />
                    <Route path='/admin/orders' component={AdminOrders} />
                    <Route path='/admin/control' component={AdminControl} />
                </Switch>
            </Suspense>
        </section>
    )
}

export default AdminPage;