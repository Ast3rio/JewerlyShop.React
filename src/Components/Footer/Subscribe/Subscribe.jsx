import React from 'react';
import style from './Subscribe.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { SubscribeFormContainer } from './SubscribeFormContainer';

const Subscribe = () => {
    
    const subscribers = useSelector(state => state.admin.subscribers);
    const subscribe = useSelector(state => state.footer.subscribe);
    
    const setSubscribe = useDispatch();
    const addNewSubscribe = useDispatch();

    //Modal window
    let [modalWindow, setModalWindow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setModalWindow(false);
        }, 2000);
    }, [setTimeout(true)]);

    //Submit info about new subscriber for admin
    let onSubmit = (formData) => {
        setModalWindow(true); //Open modal window
        let sub = true;
        let subscriber = subscribers.push({ id: 2, email: formData.email });
        setSubscribe({ type: 'SET_SUBSCRIBE', sub }); // set subscribe is true
        addNewSubscribe({ type: 'ADD_NEW_SUBSCRIBER', subscriber }); // add new subscribe to admin panel
    };

    return (
        <div className={style.subscribe}>
            Подписаться:
            <SubscribeFormContainer onSubmit={onSubmit} modalWindow={modalWindow} subscribe={subscribe} />
        </div>
    )
}



export default Subscribe;