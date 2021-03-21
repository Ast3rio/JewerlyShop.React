import React, { useState } from 'react';
import style from './../Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Search = () => {

    const card = useSelector(state => state.storePage.card);
    const searchStatus = useSelector(state => state.header.searchStatus);
    const searchValue = useSelector(state => state.header.searchValue);
    const setSearchValue = useDispatch();
    const setSearchBar = useDispatch();

    const handleSearchValue = (e) => {
        let setValue = e.target.value;
        setSearchValue({ type: 'SET_SEARCH_VALUE', setValue });
    };

    const toggleSearchStatus = () => {
        let status = !searchStatus;
        setSearchBar({type: 'SET_SEARCH_BAR', status});
    }

    return (
        <div className={style.search} >
            <input className={style.search__input + ' ' + (searchStatus ? style.search__active : style.search__deactive)} type="text" placeholder='Поиск' onChange={handleSearchValue} />
            {searchStatus ?
                <div onClick={toggleSearchStatus} className={style.search__close}><span>&times;</span></div> :
                <div className={style.search__icon}>
                    <FontAwesomeIcon onClick={toggleSearchStatus} className={style.icon_style} icon={faSearch} />
                </div>}
            {searchStatus && <ul className={style.search__list}>
                {card.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()) && searchValue !== '').map(el => <li key={el.id}><NavLink to={`/store/good/${el.id}`}>{el.title}</NavLink></li> )}
            </ul>}
        </div>
    )
}

export default Search;