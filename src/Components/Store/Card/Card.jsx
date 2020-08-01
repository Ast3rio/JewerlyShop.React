import React from 'react';
import s from './Card.module.scss';
import Paginator from '../../Common/Paginator/Paginator';
import { CardFunctionalContainer } from './CardFunctionalContainer';



const Card = (props) => {

    return (
        <div className={s.articles}>
            <Paginator totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <ul className={s.wrapper}> {
                props.card.map(c =>
                    <li className={s.card} key={c.id}>
                        <div className={s.img}></div>
                        <CardFunctionalContainer addToCart={props.addToCart} upSumprice={props.upSumprice} downSumprice={props.downSumprice} card={props.card} c={c} props={props} />
                    </li>)
            }
            </ul >
        </div>
    )
}


export default Card;