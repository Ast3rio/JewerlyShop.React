import React from 'react';
import s from './Search.module.scss';


const Search = ({closeSearch}) =>{
    return(
        <div className={s.wrapper}>
            <div className={s.close} onClick={closeSearch}>&times;</div>
            <div>ПОИСК</div>
        </div>
    )
}


export default Search;