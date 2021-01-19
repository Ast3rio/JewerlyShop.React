import React, { useState } from 'react';
import style from './../Header.module.scss';
import ava from './../../../Assets/Img/User_img/ava.png';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const LogIn = ({ openAuth }) => {

    const login = useSelector(state => state.auth.login);

    const setLogin = useDispatch();
    const setPassword = useDispatch();
    const setAdminStatus = useDispatch();

    const [userMenu, setUserMenu] = useState(false);
    const onMouseEnter = () => {
        if (login !== '') {
            setUserMenu(true);
        }
    };
    const onMouseLeave = () => {
        setUserMenu(false);
    };

    const outFromAccount = () => {
        let login = '';
        let password = '';
        let status = false;
        setLogin({type: 'SET_LOGIN', login});
        setPassword({type: 'SET_PASSWORD', password});
        setAdminStatus({type: 'SET_ADMIN_STATUS', status});
        console.log(login);
    };

    return (
        <div className={style.login} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {login === '' ?  <a href="#" onClick={openAuth}>Log in</a> : <div>{login}</div>}
            <img src={ava} alt="avatar" className={style.ava} />
            <ul className={style.login_menu + ' ' + (userMenu ? style.login_menu_active : '') + ' ' + (login === '' ? style.login_menu_disabled : '')}>
                <li><NavLink to='/user'>Профиль</NavLink></li>
                <li onClick={outFromAccount}>Выйти</li>
            </ul>
        </div>
    )
}

export default LogIn;