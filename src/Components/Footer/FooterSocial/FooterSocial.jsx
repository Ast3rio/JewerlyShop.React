import React from 'react';
import s from './FooterSocial.module.scss';

const FooterSocial = () =>{
    return(
        <div className={s.social}>
            Социальные сети:
            <ul className={s.icons}>
                <li className={s.list_vk}><a href="#top" className={s.ico + ' ' + s.vk}></a></li>
                <li className={s.list_telegram}><a href="#top" className={s.ico + ' ' + s.telegram}></a></li>
                <li className={s.list_instagram}><a href="#top" className={s.ico + ' ' + s.instagram}></a></li>
            </ul>
        </div>
    )
}


export default FooterSocial;