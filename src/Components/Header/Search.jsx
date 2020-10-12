import React from 'react';
import style from './Search.module.scss';


const Search = ({ closeSearch }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.top}>
                <div>ПОИСК</div>
                <div className={style.close} onClick={closeSearch}>&times;</div>
            </div>
        </div>
    )
}


export default Search;