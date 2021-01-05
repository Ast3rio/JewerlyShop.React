import React from 'react';
import style from './Card.module.scss';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Paginator from '../../Common/Paginator/Paginator';
import CardFunctional from './CardFunctional';
import Switch from 'react-bootstrap/esm/Switch';
import Good from '../Good/Good';

const Card = (props) => {

    const goodsType = useSelector(state => state.storePage.goodsType);

    return (
        <div className={style.articles}>
            <Switch>
                <Route exact path='/store/all' render={() => <CardAll card={props.card} {...props} />} />
                <Route path={`/store/${goodsType}`} render={() => <CardFilter card={props.card} {...props} />} />
                <Route path={`/store/good/:id`} component={Good} />
                <Redirect from='/store' to='/store/all' />
            </Switch>
        </div>
    )
}

const CardAll = ({ card, cart, upGoodsCount, downGoodsCount, addGoodsToCart, totalItemsCount, pageSize, currentPage, onPageChanged, ...props }) => {

    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={totalItemsCount} pageSize={pageSize}
                currentPage={currentPage} onPageChanged={onPageChanged} />
            <ul className={style.wrapper}>
                {
                    card.map(good =>
                        <li className={style.card} key={good.id}>
                            <NavLink to={`/store/good/${good.id}`}><div className={style.img}></div></NavLink>
                            <CardFunctional addGoodsToCart={addGoodsToCart} upGoodsCount={upGoodsCount}
                                downGoodsCount={downGoodsCount} cart={cart} card={card} good={good} props={props} />
                        </li>)
                }
            </ul>
        </div>
    )
}

const CardFilter = ({ card, cart, upGoodsCount, downGoodsCount, addGoodsToCart, totalItemsCount, pageSize, currentPage, onPageChanged, ...props }) => {

    const goodsType = useSelector(state => state.storePage.goodsType);
    const minPrice = useSelector(state => state.filter.minPrice);
    const maxPrice = useSelector(state => state.filter.maxPrice);
    const widthBasis = useSelector(state => state.filter.widthBasis);
    const material = useSelector(state => state.filter.material);

    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={totalItemsCount} pageSize={pageSize}
                currentPage={currentPage} onPageChanged={onPageChanged} />
            <ul className={style.wrapper}>
                {
                    card.filter(cardFilter => cardFilter.type === goodsType &&
                        cardFilter.price >= minPrice && cardFilter.price <= maxPrice &&
                        cardFilter.width === widthBasis && cardFilter.material === material 
                    ).map(good =>
                        <li className={style.card} key={good.id}>
                            <NavLink to={`/store/good/${good.id}`}><div className={style.img}></div></NavLink>
                            <CardFunctional addGoodsToCart={addGoodsToCart} upGoodsCount={upGoodsCount}
                                downGoodsCount={downGoodsCount} cart={cart} card={card} good={good} props={props} />
                        </li>)
                }
            </ul >
        </div>
    )
}

export default Card;