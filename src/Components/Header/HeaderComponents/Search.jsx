import React from 'react';
import style from './../Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

const Search = () => {
    //Dispatches
    const setSearchValue = useDispatch();

    const handleSearchValue = (e) => {
        let setValue = e.target.value;
        setSearchValue({ type: 'SET_SEARCH_VALUE', setValue });
    };

    return (
        <div className={style.search__wrapper} >
            <input className={style.search_input} type="text" placeholder='Поиск' onChange={handleSearchValue} />
            <FontAwesomeIcon className={style.search + ' ' + style.icon_style} icon={faSearch} />
        </div>
    )
}

export default Search;