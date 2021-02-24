import React from 'react';
import style from './Contacts.module.scss';
import { useState, useEffect } from 'react';
import ModalWindow from '../Common/ModalWindow';
import ContactsLeftBlock from './ContactsLeftBlock';
import ContactsRightBlock from './ContactsRightBlock';

const Contacts = () => {

    let [modalWindow, setModalWindow] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setModalWindow(false);
        }, 2000);
    }, [setTimeout(true)]);
    
    return (
        <section className={style.contacts}>
            {modalWindow ? <ModalWindow label='Ваше сообщение отправлено' className={style.modal} /> : ''}
            <div className={style.contacts__wrapper}>
                <ContactsLeftBlock />
                <ContactsRightBlock setModalWindow={setModalWindow} />
            </div>
        </section>
    )
}

export default Contacts;