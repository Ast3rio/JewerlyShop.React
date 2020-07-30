import React from 'react';
import s from './Paginator.module.scss';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return (
        <div className={s.paginator}>
            {pages.map( p => {
                return <span key={p} className={s.page_number + ' ' + (currentPage === p && s.selected_page) }
                 onClick={() => {onPageChanged(p)}} >{p}</span>
            })}
        </div>
    )
}

export default Paginator;