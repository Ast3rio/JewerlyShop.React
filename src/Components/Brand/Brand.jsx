import React from 'react';
import style from './Brand.module.scss';
//Import modules
import { useSelector } from 'react-redux';
//Import labraries
import ReactPlayer from 'react-player';

const Brand = () => {
    //State
    const image = useSelector(state => state.brandPage.image);
    const videoUrl = useSelector(state => state.brandPage.videoUrl);
    const text = useSelector(state => state.brandPage.text);

    return (
        <section className={style.brand}>
            <div className={style.title}>Про компанию</div>
            {/*Info about company*/}
            <div className={style.text}>
                <img src={image} className={style.img} alt="Пара" />
                {text.map(text => <p key={text.id}>{text.paragraph}</p>)}
            </div>
            <ReactPlayer className={style.video} controls={true} width='1200px' height='680px' url={videoUrl} />
        </section>
    )
}


export default Brand;