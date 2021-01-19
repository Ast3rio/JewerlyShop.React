import React from 'react';
import style from './Store.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Card from './Card/Card';

const Store = ()=>{
    return(
        <section className={style.store}>
            <div className={style.store_wrapper}>
                <Sidebar />
                <Card />
            </div>
        </section>
    )
}

export default Store;