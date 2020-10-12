import React from 'react';
import style from './FooterSocial.module.scss';

const FooterSocial = () =>{
    return(
        <div className={style.social}>
            Социальные сети:
            <ul className={style.icons}>
                <li className={style.list_vk}><a href="#top" className={style.ico + ' ' + style.vk}></a></li>
                <li className={style.list_telegram}><a href="#top" className={style.ico + ' ' + style.telegram}></a></li>
                <li className={style.list_instagram}><a href="#top" className={style.ico + ' ' + style.instagram}></a></li>
            </ul>
        </div>
    )
}


export default FooterSocial;