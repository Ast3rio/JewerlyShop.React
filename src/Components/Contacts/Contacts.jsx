import React from 'react';
import s from './Contacts.module.scss';
import { useState, useEffect } from 'react';
import ModalWindow from '../Common/ModalWindow';
import { UsersOffer } from './UsersOffer';

const Contacts = () => {

    let [modalWindow, setModalWindow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setModalWindow(false)
        }, 2000);
    }, [setTimeout(true)]);

    const onSubmit = (formData) => {
        console.log('Email: ' + formData.email + ' Name: '  + formData.name + ' Message: ' +  formData.text);
        setModalWindow(true);
    }

    return (
        <section className={s.contacts}>
            {modalWindow ? <ModalWindow label='Ваше сообщение отправлено' className={s.modal}/> : ''}
            <div className={s.contacts__wrapper}>
                <div className={s.block__left}>
                    <h3>Контакты</h3>
                Режим работы интернет-магазина:
                     <ul>
                        <li className={s.list}>ПН-ПТ с 11:00 до 19:00</li>
                        <li className={s.list}>СБ-ВС с 12:00 до 18:00</li>
                    </ul>
                Наш офлайн менеджер:
                    <ul>
                        <li className={s.list}>+38 (093) 000-00-00</li>
                        <li className={s.list}>test@mail.com</li>
                    </ul>
                </div>
                <div className={s.block__right}>
                    <h3>Сотрудничество / Предложения</h3>
                Если у Вас есть к нам предложение о сотрудничестве, вопрос, напишите нам на почту - test@mail.com
                <UsersOffer onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    )
}

export default Contacts;