import React from 'react';
import s from './Store.module.scss';
import Sidebar from './Sidebar/Sidebar';
import CardContainer from './Card/CardContainer';



const Store = ()=>{
    return(
        <section className={s.store}>
            <div className={s.store_wrapper}>
                <Sidebar />
                <CardContainer />
            </div>
        </section>
    )
}

export default Store;