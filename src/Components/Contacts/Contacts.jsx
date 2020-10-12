import React from 'react';
import style from './Contacts.module.scss';
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
        <section className={style.contacts}>
            {modalWindow ? <ModalWindow label='Ваше сообщение отправлено' className={style.modal}/> : ''}
            <div className={style.contacts__wrapper}>
                <div className={style.block__left}>
                    <h3>Контакты</h3>
                Режим работы интернет-магазина:
                     <ul>
                        <li className={style.list}>ПН-ПТ с 11:00 до 19:00</li>
                        <li className={style.list}>СБ-ВС с 12:00 до 18:00</li>
                    </ul>
                Наш офлайн менеджер:
                    <ul>
                        <li className={style.list}>+38 (093) 000-00-00</li>
                        <li className={style.list}>test@mail.com</li>
                    </ul>
                </div>
                <div className={style.block__right}>
                    <h3>Сотрудничество / Предложения</h3>
                Если у Вас есть к нам предложение о сотрудничестве, вопрос, напишите нам на почту - test@mail.com
                <UsersOffer onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    )
}

export default Contacts;