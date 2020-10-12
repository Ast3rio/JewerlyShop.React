import React from 'react';
import style from './Paginator.module.scss';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return (
        <div className={style.paginator}>
            {pages.map( p => {
                return <span key={p} className={style.page_number + ' ' + (currentPage === p && style.selected_page) }
                 onClick={() => {onPageChanged(p)}} >{p}</span>
            })}
        </div>
    )
}

export default Paginator;