import React from 'react';
import s from './Store.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Articles from './Articles/Aritles';

const Store = ()=>{
    return(
        <section className={s.store}>
            <div className={s.store_wrapper}>
                <Sidebar />
                <Articles />
            </div>
        </section>
    )
}

export default Store;