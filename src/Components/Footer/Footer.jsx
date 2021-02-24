import React from 'react';
import style from './Footer.module.scss';
import FooterContacts from './FooterContacts/FooterContacts';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterSocial from './FooterSocial/FooterSocial';
import Subscribe from './Subscribe/Subscribe';

const Footer = () => {
    return (
        <footer className={style.footer + ' ' + 'container'}>
            <div className={style.footer__top}>
                <FooterMenu />
                <FooterSocial />
                <FooterContacts />
                <Subscribe />
            </div>
            <p>Chernyshovu jewelry</p>
            <p>2020</p>
        </footer>
    )
}

export default Footer;