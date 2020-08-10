import React from 'react';
import s from './Card.module.scss';
import Paginator from '../../Common/Paginator/Paginator';
import CardFunctional from './CardFunctional';




const Card = (props) => {

    return (
        <div className={s.articles}>
            <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <ul className={s.wrapper}> {
                props.card.map(c =>
                    <li className={s.card} key={c.id}>
                        <div className={s.img}></div>
                        <CardFunctional addGoodsToCart={props.addGoodsToCart} upSumprice={props.upSumprice} downSumprice={props.downSumprice} cart={props.cart} card={props.card} c={c} props={props} />
                    </li>)
            }
            </ul >
        </div>
    )
}


export default Card;