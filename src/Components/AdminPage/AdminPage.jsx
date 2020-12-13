import React from 'react';
import style from './AdminPage.module.scss';
//Modules
import { useSelector } from 'react-redux';

const AdminPage = () => {
    //State
    const subscribers = useSelector(state => state.admin.subscribers);
    const message = useSelector(state => state.admin.messages);

    const getIndex = (getId) => { return subscribers.findIndex(({ id }) => id == getId) + 1;} //Find index in array
    
    return (
        <section className={style.wrapper}>
            {/*List of subscribers*/}
            <ul className={style.subscribers}>
                {subscribers.map(sub => <li key={sub.id}>{getIndex(sub.id)} {sub.email}</li>)}
            </ul>
            {/*List of messages from users*/}
            <ul className={style.messages}>
                {message.map(mes => <li key={mes.id}>{getIndex(mes.id)} Name: {mes.name}, Email: {mes.mail}, Phone: {mes.phone}, Text: {mes.text}</li>)}
            </ul>
            {/*List of orders*/}
            <ul className={style.order}>

            </ul>
        </section>
    )
}

export default AdminPage;