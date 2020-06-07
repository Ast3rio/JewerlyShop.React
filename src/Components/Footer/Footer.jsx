import React from 'react';
import s from './Footer.module.scss';
import FooterContacts from './FooterContacts/FooterContacts';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterSocial from './FooterSocial/FooterSocial';
import FooterSubscribe from './FooterSubscribe/FooterSubscribe';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__top}>
                <FooterMenu />
                <FooterSocial />
                <FooterContacts />
                <FooterSubscribe />
            </div>
            <p>Chernyshovu jewerly</p>
            <p>2019</p>
        </footer>
    )
}


export default Footer;