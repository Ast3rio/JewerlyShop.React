import axios from "axios";

const _BASE_URL = 'http://localhost:3000/';

export const getGoods = () => axios.get(`${_BASE_URL}goods`);


