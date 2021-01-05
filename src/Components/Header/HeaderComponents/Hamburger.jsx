import React from 'react';
import style from './../Header.module.scss';

const Hamburger = ({ mobileMenu, closeMobileMenu, openMobileMenu }) => {
    return (
        <div className={style.mobile_menu} onClick={mobileMenu ? closeMobileMenu : openMobileMenu}>
            <div className={style.hamburger + ' ' + (mobileMenu ? style.active_menu : null)} ></div>
            <div className={style.close_hamburger + ' ' + (mobileMenu ? style.deactive_menu : null)} ></div>
        </div>
    )
}

export default Hamburger;