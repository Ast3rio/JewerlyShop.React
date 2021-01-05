import React from 'react';
import style from './Card.module.scss';
import { Button } from '../../Common/FormsControls';
import GoodsAmount from '../../Common/GoodsAmount/GoodsAmount';

const CardFunctional = ({ addGoodsToCart, good, cart }) => {

    const addGood = (e) => {
        e.preventDefault();
        addGoodsToCart(cart.concat({ id: good.id, title: good.title, price: good.price, count: good.count }));
        good.count = 1;
    }

    return (
        <div>
            <h6 className={style.card_title}>{good.title}</h6>
            <div className={style.top}>
                <div className={style.price}>{good.price + ' $'}</div>
                {good.status === 'есть в наличии' ? <div className={style.status + ' ' + style.green}>{good.status}</div>
                    : <div className={style.status}>{good.status}</div>}
            </div>
            <ul className={style.bottom}>
                <li>Ширина основы: {good.width}</li>
                <li>Материал: {good.material}</li>
            </ul>
            <div className={style.control}>
                <GoodsAmount id={good.id} count={good.count} />
                <Button label={'В корзину'}
                    onClick={addGood}
                    className={style.card_btn} />
            </div>
        </div>
    )
}


export default CardFunctional;