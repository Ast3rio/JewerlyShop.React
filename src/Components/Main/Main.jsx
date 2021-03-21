import React from 'react';
import style from './Main.module.scss';
import { useSelector } from 'react-redux';



const Main = () => {

    const blocks = useSelector(state => state.mainPage.blocks);
    
    return (
        <main className={style.wrapper}>
            {blocks.map(({id, image, descr, title}) => <div key={id} className={style.effects + ' ' + style.item__wrapper}>
                <img src={image} alt="image" className={style.img} />
                <div className={style.info}>
                    <div className={style.descr}>{descr}</div>
                    <a href="#top" className={style.link}>Узнать больше</a>
                </div>
                <div className={style.title}><p>{title}</p></div>
            </div>)}
        </main>
    )
}



export default Main;