import React from 'react';
import s from './Search.module.scss';


const Search = ({ closeSearch }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <div>ПОИСК</div>
                <div className={s.close} onClick={closeSearch}>&times;</div>
            </div>
        </div>
    )
}


export default Search;