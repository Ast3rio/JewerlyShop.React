import React from 'react';
import style from './Card.module.scss';
import { Button } from '../../Common/FormsControls';
import GoodsAmount from '../../Common/GoodsAmount/GoodsAmount';




const CardFunctional = ({ addGoodsToCart, downSumprice, upSumprice, c, cart, ...props }) => {
    

    return (
        <div>
            <h6 className={style.card_title}>{c.title}</h6>
            <div className={style.top}>
                <div className={style.price}>{c.price + ' $'}</div>
                {c.status === 'есть в наличии' ? <div className={style.status + ' ' + style.green}>{c.status}</div>
                    : <div className={style.status}>{c.status}</div>}
            </div>
            <ul className={style.bottom}>
                <li>Ширина основы: {c.width}</li>
                <li>Материал: {c.material}</li>
            </ul>
            <div className={style.control}>
                <Button label={'В корзину'}
                    onClick={(e) => { e.preventDefault(); addGoodsToCart(cart.concat({ id: c.id, title: c.title, price: c.price, sumprice: c.sumprice })) }}
                    className={style.card_btn} />
                <GoodsAmount id={c.id} sumprice={c.sumprice} downSumprice={downSumprice} upSumprice={upSumprice} />
            </div>
        </div>
    )
}


export default CardFunctional;