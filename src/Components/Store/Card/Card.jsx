import React from 'react';
import style from './Card.module.scss';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from '../../Common/Paginator/Paginator';
import CardFunctional from './CardFunctional';
import Good from '../Good/Good';
import { getGoods } from '../../../Api/api';

const Card = ({ ...props }) => {

    const addGoodsToCart = useDispatch();
    const setGoods = useDispatch();

    const goodsType = useSelector(state => state.storePage.goodsType),
        minPrice = useSelector(state => state.filter.minPrice),
        maxPrice = useSelector(state => state.filter.maxPrice),
        widthBasis = useSelector(state => state.filter.widthBasis),
        goodMaterial = useSelector(state => state.filter.goodMaterial),
        card = useSelector(state => state.storePage.card),
        totalItemsCount = useSelector(state => state.storePage.totalItemsCount),
        pageSize = useSelector(state => state.storePage.pageSize),
        currentPage = useSelector(state => state.storePage.currentPage);

    const setGoodsOnPage = () => {
        getGoods().then(
            res => {
                setGoods({ type: 'SET_GOODS', goods : res.data });
            }
        );
    }

    if(card.length === 0) {
        setGoodsOnPage();
    }

    const renderGoods = (good) => {
        const { id } = good;
        return (
            <li className={style.card} key={id}>
                <NavLink to={`/store/good/${id}`}><div className={style.img}></div></NavLink>
                <CardFunctional addGoodsToCart={addGoodsToCart} card={card} good={good} props={props} />
            </li>
        )
    }

    return (
        <div className={style.articles}>
            <Switch>
                <Route exact path='/store/all' render={() => <CardAll card={card} minPrice={minPrice} maxPrice={maxPrice} widthBasis={widthBasis} goodMaterial={goodMaterial}
                    totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage} renderGoods={renderGoods} {...props} />} />
                <Route path={`/store/${goodsType}`} render={() => <CardFilter card={card} goodsType={goodsType}
                    minPrice={minPrice} maxPrice={maxPrice} widthBasis={widthBasis} goodMaterial={goodMaterial} totalItemsCount={totalItemsCount}
                    pageSize={pageSize} currentPage={currentPage} renderGoods={renderGoods} {...props} />} />
                <Route path={`/store/good/:id`} component={Good} />
                <Redirect from='/store' to='/store/all' />
            </Switch>
        </div>
    )
}

const CardAll = ({ card, minPrice, maxPrice, totalItemsCount, widthBasis, goodMaterial, pageSize, currentPage, renderGoods }) => {

    const filterGoods = () => {
        if (widthBasis === "-----" && goodMaterial === "-----") {
            return card.filter(({ price }) => price >= minPrice)
                .filter(({ price }) => price <= maxPrice)
                .map(good => renderGoods(good))
        }
        if (widthBasis === "-----") {
            return card.filter(({ price }) => price >= minPrice)
                .filter(({ price }) => price <= maxPrice)
                .filter(({ material }) => material === goodMaterial)
                .map(good => renderGoods(good))
        }
        if (goodMaterial === "-----") {
            return card.filter(({ price }) => price >= minPrice)
                .filter(({ price }) => price <= maxPrice)
                .filter(({ width }) => width === widthBasis)
                .map(good => renderGoods(good))
        }
        if (widthBasis !== "-----" && goodMaterial !== "-----") {
            return card.filter(({ price }) => price >= minPrice)
                .filter(({ price }) => price <= maxPrice)
                .filter(({ width }) => width === widthBasis)
                .filter(({ material }) => material === goodMaterial)
                .map(good => renderGoods(good))
        }
    }

    return (
        <div>
            <Paginator className={style.paginator} totalItemsCount={totalItemsCount} pageSize={pageSize}
                currentPage={currentPage} />
            { card.length === 0 ? <div>No data</div> : <ul className={style.wrapper}>
                {filterGoods()}
            </ul>}
        </div>
    )
}

const CardFilter = ({ card, goodsType, minPrice, maxPrice, widthBasis, goodMaterial, totalItemsCount, pageSize, currentPage, renderGoods }) => {

    const filterGoods = () => {
        if (widthBasis === "-----" && goodMaterial === "-----") {
            return card.filter(({ type }) => type === goodsType)
                .filter(({ price }) => price >= minPrice)
                .filter(({ price }) => price <= maxPrice)
                .map(good => renderGoods(good))
        }
        if (widthBasis === "-----") {
            return card.filter(({ type }) => type === goodsType)
                .filter(({ price }) => price >= minPrice)
                .filter(({ price }) => price <= maxPrice)
                .filter(({ material }) => material === goodMaterial)
                .map(good => renderGoods(good))
        }
        if (goodMaterial === "-----") {
            return card.filter(({ type }) => type === goodsType)
                .filter(({ price }) => price >= minPrice)
                .filter(({ price }) => price <= maxPrice)
                .filter(({ width }) => width === widthBasis)
                .map(good => renderGoods(good))
        }
        if (widthBasis !== "-----" && goodMaterial !== "-----") {
            return card.filter(({ type }) => type === goodsType)
                .filter(({ price }) => price >= minPrice)
                .filter(({ price }) => price <= maxPrice)
                .filter(({ width }) => width === widthBasis)
                .filter(({ material }) => material === goodMaterial)
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