
import img_1 from '../assets/img/main_img/ring.jpg';
import img_2 from '../assets/img/main_img/shackle.png';
import img_3 from '../assets/img/main_img/bracelet.jpg';
import img_4 from '../assets/img/main_img/stud.jpg';
import img_5 from '../assets/img/main_img/manjewerly.jpg';
import img_6 from '../assets/img/main_img/womanjewerly.jpg';
import img_7 from '../assets/img/main_img/newjewerly.jpg';
import img_8 from '../assets/img/main_img/comand.jpg';
import img_9 from '../assets/img/main_img/contacts.png';

const DESCR = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore veritatis omnis distinctio dignissimos.
Commodi officia natus id repellat quas,
saepe eius modi veritatis accusantium dignissimos laborum soluta asperiores sapiente.`;

export const MAIN_PAGE_IMAGES = {
    IMG_1: img_1,
    IMG_2: img_2,
    IMG_3: img_3,
    IMG_4: img_4,
    IMG_5: img_5,
    IMG_6: img_6,
    IMG_7: img_7,
    IMG_8: img_8,
    IMG_9: img_9,
}

export const MAIN_PAGE_TITLES = {
    TITLE_1: 'Кольца',
    TITLE_2: 'Серьги',
    TITLE_3: 'Браслеты',
    TITLE_4: 'Запонки',
    TITLE_5: 'Мужские украшения',
    TITLE_6: 'Женские украшения',
    TITLE_7: 'Новое',
    TITLE_8: 'О нас',
    TITLE_9: 'Контакты',
}

let initialState = {
    blocks: [
        { id: 1, image: MAIN_PAGE_IMAGES.IMG_1, title: MAIN_PAGE_TITLES.TITLE_1, descr: DESCR },
        { id: 2, image: MAIN_PAGE_IMAGES.IMG_2, title: MAIN_PAGE_TITLES.TITLE_2, descr: DESCR },
        { id: 3, image: MAIN_PAGE_IMAGES.IMG_3, title: MAIN_PAGE_TITLES.TITLE_3, descr: DESCR },
        { id: 4, image: MAIN_PAGE_IMAGES.IMG_4, title: MAIN_PAGE_TITLES.TITLE_4, descr: DESCR },
        { id: 5, image: MAIN_PAGE_IMAGES.IMG_5, title: MAIN_PAGE_TITLES.TITLE_5, descr: DESCR },
        { id: 6, image: MAIN_PAGE_IMAGES.IMG_6, title: MAIN_PAGE_TITLES.TITLE_6, descr: DESCR },
        { id: 7, image: MAIN_PAGE_IMAGES.IMG_7, title: MAIN_PAGE_TITLES.TITLE_7, descr: DESCR },
        { id: 8, image: MAIN_PAGE_IMAGES.IMG_8, title: MAIN_PAGE_TITLES.TITLE_8, descr: DESCR },
        { id: 9, image: MAIN_PAGE_IMAGES.IMG_9, title: MAIN_PAGE_TITLES.TITLE_9, descr: DESCR },
    ],

}

const mainPageReducer = (state = initialState, action) => {
    return state;
}


export default mainPageReducer;