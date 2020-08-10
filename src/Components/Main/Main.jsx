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
                <div className={"col" + ' ' + s.effects + ' ' + s.item__wrapper}><img src={ring} alt="ring" className={s.img} />
                    <div className={s.info}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore veritatis omnis distinctio dignissimos.
                        Commodi officia natus id repellat quas,
                        saepe eius modi veritatis accusantium dignissimos laborum soluta asperiores sapiente.</p>
                        <a href="#top">Узнать больше</a>
                    </div>
                    <div className={s.title}><p>Кольца</p></div>
                </div>
                <div className={"col" + ' ' + s.effects + ' ' + s.item__wrapper}><img src={shackle} alt="ring" className={s.img} />
                    <div className={s.info}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore veritatis omnis distinctio dignissimos.
                        Commodi officia natus id repellat quas,
                        saepe eius modi veritatis accusantium dignissimos laborum soluta asperiores sapiente.</p>
                        <a href="#top">Узнать больше</a>
                    </div>
                    <div className={s.title}><p>Серьги</p></div>
                </div>
                <div className={"col" + ' ' + s.effects + ' ' + s.item__wrapper}><img src={bracelet} alt="ring" className={s.img} />
                    <div className={s.info}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore veritatis omnis distinctio dignissimos.
                        Commodi officia natus id repellat quas,
                        saepe eius modi veritatis accusantium dignissimos laborum soluta asperiores sapiente.</p>
                        <a href="#top">Узнать больше</a>
                    </div>
                    <div className={s.title}><p>Браслеты</p></div>
                </div>
                <div className={"col" + ' ' + s.effects + ' ' + s.item__wrapper}><img src={stud} alt="ring" className={s.img} />
                    <div className={s.info}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore veritatis omnis distinctio dignissimos.
                        Commodi officia natus id repellat quas,
                        saepe eius modi veritatis accusantium dignissimos laborum soluta asperiores sapiente.</p>
                        <a href="#top">Узнать больше</a>
                    </div>
                    <div className={s.title}><p>Запонки</p></div>
                </div>
                <div className={"col" + ' ' + s.effects + ' ' + s.item__wrapper}><img src={manjewerly} alt="ring" className={s.img} />
                    <div className={s.info}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore veritatis omnis distinctio dignissimos.
                        Commodi officia natus id repellat quas,
                        saepe eius modi veritatis accusantium dignissimos laborum soluta asperiores sapiente.</p>
                        <a href="#top">Узнать больше</a>
                    </div>
                    <div className={s.title}><p>Мужские украшения</p></div>
                </div>
                <div className={"col" + ' ' + s.effects + ' ' + s.item__wrapper}><img src={womanjewerly} alt="ring" className={s.img} />
                    <div className={s.info}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore veritatis omnis distinctio dignissimos.
                        Commodi officia natus id repellat quas,
                        saepe eius modi veritatis accusantium dignissimos laborum soluta asperiores sapiente.</p>
                        <a href="#top">Узнать больше</a>
                    </div>
                    <div className={s.title}><p>Женские украшения</p></div>
                </div>
                <div className={"col" + ' ' + s.effects + ' ' + s.item__wrapper}><img src={newjewerly} alt="ring" className={s.img} />
                    <div className={s.info}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore veritatis omnis distinctio dignissimos.
                        Commodi officia natus id repellat quas,
                        saepe eius modi veritatis accusantium dignissimos laborum soluta asperiores sapiente.</p>
                        <a href="#top">Узнать больше</a>
                    </div>
                    <div className={s.title}><p>Новое</p></div>
                </div>
                <div className={"col" + ' ' + s.effects + ' ' + s.item__wrapper}><img src={comand} alt="ring" className={s.img} />
                    <div className={s.info}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore veritatis omnis distinctio dignissimos.
                        Commodi officia natus id repellat quas,
                        saepe eius modi veritatis accusantium dignissimos laborum soluta asperiores sapiente.</p>
                        <a href="#top">Узнать больше</a>
                    </div>
                    <div className={s.title}><p>О нас</p></div>
                </div>
                <div className={"col" + ' ' + s.effects + ' ' + s.item__wrapper}><img src={contacts} alt="ring" className={s.img} />
                    <div className={s.info}>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore veritatis omnis distinctio dignissimos.
                        Commodi officia natus id repellat quas,
                        saepe eius modi veritatis accusantium dignissimos laborum soluta asperiores sapiente.</p>
                        <a href="#top">Узнать больше</a>
                    </div>
                    <div className={s.title}><p>Контакты</p></div>
                </div>
            </div>
        </section>
    )
}


export default Main;