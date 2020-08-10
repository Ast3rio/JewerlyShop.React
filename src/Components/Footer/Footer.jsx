import React from 'react';
import s from './Footer.module.scss';
import FooterContacts from './FooterContacts/FooterContacts';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterSocial from './FooterSocial/FooterSocial';
import SubscribeContainer from './Subscribe/SubscribeContainer';


const Footer = () => {
    return (
        <footer className={s.footer + ' ' + 'container'}>
            <div className={s.footer__top}>
                <FooterMenu />
                <FooterSocial />
                <FooterContacts />
                <SubscribeContainer />
            </div>
            <p>Chernyshovu jewerly</p>
            <p>2020</p>
        </footer>
    )
}


export default Footer;