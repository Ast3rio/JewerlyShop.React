import React from 'react';
import style from './../Header.module.scss';
import ava from './../../../Assets/Img/User_img/ava.png';

const LogIn = () => {
    return (
        <div className={style.login}>
            <a href="#">Log in</a>
            <img src={ava} alt="avatar" className={style.ava} />
        </div>
    )
}

export default LogIn;