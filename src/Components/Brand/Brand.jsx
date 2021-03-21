import React from 'react';
import style from './Brand.module.scss';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import couple from '../../Assets/Img/Brand_img/couple.png';
import {PropTypes} from 'prop-types';

const Brand = () => {

    const image = useSelector(state => state.brandPage.image);
    const videoUrl = useSelector(state => state.brandPage.videoUrl);
    const text = useSelector(state => state.brandPage.text);

    return (
        <section className={style.brand}>
            <div className={style.title}>Про компанию</div>
            <div className={style.text}>
                <img src={image} className={style.img} alt="Пара" />
                {text.map(({id, paragraph}) => <p key={id}>{paragraph}</p>)}
            </div>
            <ReactPlayer className={style.video} controls={true} width='1200px' height='680px' url={videoUrl} />
        </section>
    )
}

Brand.propTypes = {
    videoUrl: PropTypes.string,
    text: PropTypes.string
}

Brand.defaultProps = {
    image: couple,
    videoUrl: 'https://www.youtube.com/watch?v=IUN664s7N-c',
    text: "Text about this brand"
}

export default Brand;