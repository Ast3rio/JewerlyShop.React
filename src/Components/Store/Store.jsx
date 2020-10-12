import React from 'react';
import style from './Store.module.scss';
import Sidebar from './Sidebar/Sidebar';
import CardContainer from './Card/CardContainer';

const Store = ()=>{
    return(
        <section className={style.store}>
            <div className={style.store_wrapper}>
                <Sidebar />
                <CardContainer />
            </div>
        </section>
    )
}

export default Store;