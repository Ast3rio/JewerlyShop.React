import React from 'react';
import { useSelector } from 'react-redux';
import style from './Main.module.scss';


const Main = () => {
    const blocks = useSelector(state => state.mainPage.blocks);
    return (
        <section className={style.wrapper}>
            {blocks.map(block => <div key={block.id} className={style.effects + ' ' + style.item__wrapper}><img src={block.image} alt="ring" className={style.img} />
                <div className={style.info}>
                    <div className={style.descr}>{block.descr}</div>
                    <a href="#top" className={style.link}>Узнать больше</a>
                </div>
                <div className={style.title}><p>{block.title}</p></div>
            </div>)}
        </section>
    )
}



export default Main;