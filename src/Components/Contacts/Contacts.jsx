import React from 'react';
import style from './Contacts.module.scss';
//Import modules
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Import components
import ModalWindow from '../Common/ModalWindow';
import { UsersOffer } from './UsersOffer';

const Contacts = () => {
    //State
    const messages = useSelector(state => state.admin.messages);
    //Dispatches
    const addNewMessage = useDispatch();
    //Open and close information modal window
    let [modalWindow, setModalWindow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setModalWindow(false)
        }, 2000);
    }, [setTimeout(true)]);
    //Submit message from user to admin panel
    const onSubmit = (formData) => {
        setModalWindow(true);
        let message = messages.push({ id: 2, name: formData.name, mail: formData.email, phone: formData.phone, text: formData.text });
        addNewMessage({ type: 'ADD_NEW_SUBSCRIBER', message });
    }

    return (
        <section className={style.contacts}>
            {modalWindow ? <ModalWindow label='Ваше сообщение отправлено' className={style.modal} /> : ''}
            <div className={style.contacts__wrapper}>
                {/*Left block with contacts*/}
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
                {/*Right block with form for submit messages*/}
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