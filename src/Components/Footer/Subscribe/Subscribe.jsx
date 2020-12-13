import React from 'react';
import style from './Subscribe.module.scss';
//Import modules
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
//Import components
import { Input } from '../../Common/FormsControls';
import ModalWindow from '../../Common/ModalWindow';

const Subscribe = () => {
    //State
    const subscribers = useSelector(state => state.admin.subscribers);
    const subscribe = useSelector(state => state.footer.subscribe);
    //Dispatches
    const setSubscribe = useDispatch();
    const addNewSubscribe = useDispatch();

    //Modal window
    let [modalWindow, setModalWindow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setModalWindow(false)
        }, 2000);
    }, [setTimeout(true)]);

    //Submit info about new subscriber for admin
    let onSubmit = (dataForm) => {
        let subscribe = true;
        let subscriber = subscribers.push({ id: 2, email: dataForm.email });
        setSubscribe({ type: 'SET_SUBSCRIBE', subscribe }); // set subscribe is true
        addNewSubscribe({ type: 'ADD_NEW_SUBSCRIBER', subscriber }); // add new subscribe to admin panel
        setModalWindow(true); //Open modal window
    }

    return (
        <div className={style.subscribe}>
            Подписаться:
            <SubscribeFormContainer onSubmit={onSubmit} modalWindow={modalWindow} subscribe={subscribe} />
        </div>
    )
}

const SubscribeForm = ({ handleSubmit, subscribe, modalWindow }) => {
    return (<form onSubmit={handleSubmit}>
        <Field component={Input} name='email' type='text' label='введите имейл' />
        {subscribe ? <button disabled>Вы подписаны</button> : <button>Подписаться</button>}
        {modalWindow ? <ModalWindow label={'Вы подписались'} /> : ''}
    </form>)
}

const SubscribeFormContainer = reduxForm({
    form: 'subscribe',
})(SubscribeForm)

export default Subscribe;