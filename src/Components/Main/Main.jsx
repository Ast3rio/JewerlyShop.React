import React from 'react';
import s from './Main.module.scss';
import ring from '../../assets/img/main_img/ring.jpg';
import shackle from '../../assets/img/main_img/shackle.png';
import bracelet from '../../assets/img/main_img/bracelet.jpg';
import stud from '../../assets/img/main_img/stud.jpg';
import manjewerly from '../../assets/img/main_img/manjewerly.jpg';
import womanjewerly from '../../assets/img/main_img/womanjewerly.jpg';
import newjewerly from '../../assets/img/main_img/newjewerly.jpg';
import comand from '../../assets/img/main_img/comand.jpg';
import contacts from '../../assets/img/main_img/contacts.png';


const Main = () => {
    return (
        <section className={s.wrapper}>
            <div className='row row-cols-3'>
                <div className={"col" + ' ' + s.effects}><a href="#top"><img src={ring} alt="ring" className={s.img} /><div className={s.title}><p>Кольца</p></div></a></div>
                <div className={"col" + ' ' + s.effects}><a href="#top"><img src={shackle} alt="ring" className={s.img} /><div className={s.title}><p>Серьги</p></div></a></div>
                <div className={"col" + ' ' + s.effects}><a href="#top"><img src={bracelet} alt="ring" className={s.img} /><div className={s.title}><p>Браслеты</p></div></a></div>
                <div className={"col" + ' ' + s.effects}><a href="#top"><img src={stud} alt="ring" className={s.img} /><div className={s.title}><p>Запонки</p></div></a></div>
                <div className={"col" + ' ' + s.effects}><a href="#top"><img src={manjewerly} alt="ring" className={s.img} /><div className={s.title}><p>Мужские украшения</p></div></a></div>
                <div className={"col" + ' ' + s.effects}><a href="#top"><img src={womanjewerly} alt="ring" className={s.img} /><div className={s.title}><p>Женские украшения</p></div></a></div>
                <div className={"col" + ' ' + s.effects}><a href="#top"><img src={newjewerly} alt="ring" className={s.img} /><div className={s.title}><p>Новое</p></div></a></div>
                <div className={"col" + ' ' + s.effects}><a href="#top"><img src={comand} alt="ring" className={s.img} /><div className={s.title}><p>О нас</p></div></a></div>
                <div className={"col" + ' ' + s.effects}><a href="#top"><img src={contacts} alt="ring" className={s.img} /><div className={s.title}><p>Контакты</p></div></a></div>
            </div>
        </section>
    )
}


export default Main;