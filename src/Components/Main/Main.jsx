import React from 'react';
import s from './Main.module.scss';


const Main = ()=>{
    return(
        <section className={s.main}>
            <div className={s.wrapper}>
                <a href="#" className={s.img_1}><div className={s.title}><p>Кольца</p></div></a>
                <a href="#" className={s.img_2}><div className={s.title}><p>Серьги</p></div></a>
                <a href="#" className={s.img_3}><div className={s.title}><p>Браслеты</p></div></a>
                <a href="#" className={s.img_4}><div className={s.title}><p>Запонки</p></div></a>
                <a href="#" className={s.img_5}><div className={s.title}><p>Мужские украшения</p></div></a>
                <a href="#" className={s.img_6}><div className={s.title}><p>Женские украшения</p></div></a>
                <a href="#" className={s.img_7}><div className={s.title}><p>Новое</p></div></a>
                <a href="#" className={s.img_8}><div className={s.title}><p>О нас</p></div></a>
                <a href="#" className={s.img_9}><div className={s.title}><p>Контакты</p></div></a>
            </div>
        </section>
    )
}


export default Main;