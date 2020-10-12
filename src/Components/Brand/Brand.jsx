import React from 'react';
import ReactPlayer from 'react-player';
import style from './Brand.module.scss';
import { useSelector } from 'react-redux';

const Brand = () => {

    const image = useSelector(state => state.brandPage.image);
    const videoUrl = useSelector(state => state.brandPage.videoUrl);
    const text = useSelector(state => state.brandPage.text);

    return (
        <section className={style.brand}>
            <div className={style.title}>Про компанию</div>
            <div className={style.text}>
                <img src={image} className={style.img} alt="Пара" />
                {text.map(text => <p>{text.paragraph}</p>)}
            </div>
            <ReactPlayer className={style.video} controls='true' width='1200px' height='680px' url={videoUrl} />
        </section>
    )
}


export default Brand;