import React from 'react';
import s from './Articles.module.scss';
import CardContainer from './Card/CardContainer';


const Articles = () => {
    return (
        <section className={s.articles}>
            <CardContainer />
        </section>
    )
}

export default Articles;