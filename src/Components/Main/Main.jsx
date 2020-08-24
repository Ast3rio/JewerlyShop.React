import React from 'react';
import s from './Main.module.scss';


const Main = (props) => {
    return (
        <section className={s.wrapper}>
            <div className='row row-cols-3 justify-content-center'>
                {props.blocks.map(b => <div key={b.id} className={"col" + ' ' + s.effects + ' ' + s.item__wrapper}><img src={b.image} alt="ring" className={s.img} />
                    <div className={s.info}>
                        <div className={s.descr}>{b.descr}</div>
                        <a href="#top" className={s.link}>Узнать больше</a>
                    </div>
                    <div className={s.title}><p>{b.title}</p></div>
                </div>)}
            </div>
        </section>
    )
}


export default Main;