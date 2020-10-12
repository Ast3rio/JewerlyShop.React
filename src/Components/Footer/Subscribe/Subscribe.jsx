import React from 'react';
import style from './Subscribe.module.scss';
import ModalWindow from '../../Common/ModalWindow';
import { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../Common/FormsControls';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Subscribe = () => {

    const subscribe = useSelector(state => state.footer.subscribe);
    const setSubscribe = useDispatch();

    let [modalWindow, setModalWindow] = useState(false);

    let onSubmit = (dataForm) => {
        let subscribe = true;
        setSubscribe({type: 'SET_SUBSCRIBE', subscribe});
        setModalWindow(true);
        console.log('Пользователь подписался: ' + dataForm.email);
    }

    useEffect(() => {
        setTimeout(() => {
            setModalWindow(false)
        }, 2000);
    }, [setTimeout(true)]);

    return (
        <div className={style.subscribe}>
            Подписаться:
            <SubscribeFormContainer onSubmit={onSubmit} modalWindow={modalWindow} subscribe={subscribe} />
        </div>
    )
}


const SubscribeForm = ({handleSubmit, subscribe, modalWindow}) => {
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