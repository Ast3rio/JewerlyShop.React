import React from 'react';
import s from './Card.module.scss';


const Card = (props) => {
    return (
        <ul className={s.wrapper}>{
            props.card.map(c =>
                <li className={s.card} key={c.id}>
                    <div className={s.img}></div>
                    <div className={s.title}>{c.title}</div>
                    <div className={s.top}>
                        <div className={s.price}>{c.price} $</div>
                        <div className={s.status}>{c.status}</div>
                    </div>
                    <ul className={s.bottom}>
                        <li>Ширина основы: {c.descr.width}</li>
                        <li>Материал: {c.descr.material}</li>
                    </ul>
                    <div className={s.btn}>
                        <a href="#">В корзину</a>
                    </div>
                </li>)
        }
        </ul >

    )
}



export default Card;