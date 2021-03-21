import React from 'react';
import style from './Card.module.scss';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../../Common/Paginator/Paginator';
import CardFunctional from './CardFunctional';
import Good from '../Good/Good';

const Card = ({ ...props }) => {

    const addGoodsToCart = useDispatch();

    const goodsType = useSelector(state => state.storePage.goodsType),
        minPrice = useSelector(state => state.filter.minPrice),
        maxPrice = useSelector(state => state.filter.maxPrice),
        widthBasis = useSelector(state => state.filter.widthBasis),
        material = useSelector(state => state.filter.material),
        cart = useSelector(state => state.cart.cart),
        card = useSelector(state => state.storePage.card),
        totalItemsCount = useSelector(state => state.storePage.totalItemsCount),
        pageSize = useSelector(state => state.storePage.pageSize),
        currentPage = useSelector(state => state.storePage.currentPage);

    const renderGoods = (good) => {
        return (
            <li className={style.card} key={good.id}>
                <NavLink to={`/store/good/${good.id}`}><div className={style.img}></div></NavLink>
                <CardFunctional addGoodsToCart={addGoodsToCart} cart={cart} card={card} good={good} props={props} />
            </li>
        )
    }

    return (
        <div className={style.articles}>
            <Switch>
                <Route exact path='/store/all' render={() => <CardAll card={card} minPrice={minPrice} maxPrice={maxPrice}
                    totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage} renderGoods={renderGoods} {...props} />} />
                <Route path={`/store/${goodsType}`} render={() => <CardFilter card={card} goodsType={goodsType}
                    minPrice={minPrice} maxPrice={maxPrice} widthBasis={widthBasis} material={material} cart={cart} totalItemsCount={totalItemsCount}
                    pageSize={pageSize} currentPage={currentPage} renderGoods={renderGoods} {...props} />} />
                <Route path={`/store/good/:id`} component={Good} />
                <Redirect from='/store' to='/store/all' />
            </Switch>
        </div>
    )
}

const CardAll = ({ card, minPrice, maxPrice, totalItemsCount, pageSize, currentPage, renderGoods }) => {

    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={totalItemsCount} pageSize={pageSize}
                currentPage={currentPage} />
            <ul className={style.wrapper}>
                {
                    card.filter(({price}) => price >= minPrice)
                        .filter(({price}) => price <= maxPrice).map(good =>
                            renderGoods(good))
                }
            </ul>
        </div>
    )
}

const CardFilter = ({ card, goodsType, minPrice, maxPrice, widthBasis, material, totalItemsCount, pageSize, currentPage, renderGoods }) => {

    const filterGoods = () => {
        if (widthBasis === "-----") {
            return card.filter(({type}) => type === goodsType)
                .filter(({price}) => price >= minPrice)
                .filter(({price}) => price <= maxPrice)
                .filter(({material}) => material === material)
                .map(good => renderGoods(good))
        }
        if (material === "-----") {
            return card.filter(({type}) => type === goodsType)
                .filter(({price}) => price >= minPrice)
                .filter(({price}) => price <= maxPrice)
                .filter(({width}) => width === widthBasis)
                .map(good => renderGoods(good))
        }
        if (widthBasis !== "-----" && material !== "-----") {
            return card.filter(({type}) => type === goodsType)
                .filter(({price}) => price >= minPrice)
                .filter(({price}) => price <= maxPrice)
                .filter(({width}) => width === widthBasis)
                .filter(({material}) => material === material)
                .map(good => renderGoods(good))
        }
    }

    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={totalItemsCount} pageSize={pageSize}
                currentPage={currentPage} />
            <ul className={style.wrapper}>
                {filterGoods()}
            </ul >
        </div>
    )
}

export default Card;