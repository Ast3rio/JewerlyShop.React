import React from 'react';
import { useDispatch } from 'react-redux';
import style from './Paginator.module.scss';

const Paginator = ({ totalItemsCount, pageSize, currentPage }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    const onPageChanged = useDispatch();
    
    const setPageNumber = (p) => {
        let currentPage = p;
        onPageChanged({type: 'SET_CURRENT_PAGE', currentPage});
    }

    return (
        <div className={style.paginator}>
            {pages.map( p => {
                return <span key={p} className={style.page_number + ' ' + (currentPage === p && style.selected_page) }
                 onClick={() => setPageNumber(p)} >{p}</span>
            })}
        </div>
    )
}

export default Paginator;