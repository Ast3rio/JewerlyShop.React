import React from 'react';
import s from './Subscribe.module.scss';
import ModalWindow from '../../Common/ModalWindow';
import { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../Common/FormsControls';
import { useEffect } from 'react';

const Subscribe = (props) => {

    let onSubmit = (dataForm) => {
        props.setSubscribe(true);
        setModalWindow(true);
        console.log('Пользователь подписался: ' + dataForm.email);
    }

    let [modalWindow, setModalWindow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setModalWindow(false)
        }, 2000);
    }, [setTimeout(true)])


    return (
        <div className={s.subscribe}>
            Подписаться:
            <SubscribeFormContainer onSubmit={onSubmit} modalWindow={modalWindow} subscribe={props.subscribe} />
        </div>
    )
}


const SubscribeForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field component={Input} name={'email'} type={'text'} label='введите имейл' />
        {props.subscribe ? <button disabled>Вы подписаны</button> : <button>Подписаться</button>}
        {props.modalWindow ? <ModalWindow label={'Вы подписались'} /> : ''}
    </form>)
}

const SubscribeFormContainer = reduxForm({
    form: 'subscribe',
})(SubscribeForm)


export default Subscribe;