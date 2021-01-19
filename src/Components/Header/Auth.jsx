import { Button } from './../Common/FormsControls';
import React from 'react';
import style from './Auth.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const Auth = ({ closeAuth }) => {
    //State
    const login = useSelector(state => state.auth.login);
    const password = useSelector(state => state.auth.password);
    //Dispatches
    const setLogin = useDispatch();
    const setPassword = useDispatch();
    const setStatusAdmin = useDispatch();

    const targetCloseAuth = (e) => {
        if (e.target === e.currentTarget) {
            closeAuth();
        }
    };

    const handleSetLogin = (e) => {
        let login = e.target.value;
        setLogin({ type: 'SET_LOGIN', login});
    };

    const handleSetPassword = (e) => {
        let password = e.target.value;
        setPassword({ type: 'SET_PASSWORD', password });
    };

    const setUserData = (e) => {
        e.preventDefault();
        let status = true;
        if (login === 'admin' && password === 'admin') {
            setStatusAdmin({ type: 'SET_ADMIN_STATUS', status });
        }
        closeAuth();
    };

    return (
        <section className={style.auth} onClick={targetCloseAuth}>
            <div className={style.wrapper}>
                <div className={style.block}>
                    <h2>Авторизация</h2>
                    <form className={style.form}>
                        <input type="text" onChange={handleSetLogin} />
                        <input type="password" onChange={handleSetPassword} />
                        <Button label={"Войти"} onClick={setUserData} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Auth;