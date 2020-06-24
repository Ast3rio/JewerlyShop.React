
let initialState = {
    card: [
        {id: 1, title: 'Ring_1', price: 700, status: 'есть в наличии', descr: {width: '8', material: 'wood'}},
        {id: 2, title: 'Ring_2', price: 1400, status: 'нет на складе', descr: {width: '12', material: 'metal'}},
        {id: 3, title: 'Ring_3', price: 300, status: 'есть в наличии', descr: {width: '6', material: 'wood'}},
        {id: 4, title: 'Ring_4', price: 1200, status: 'есть в наличии', descr: {width: '10', material: 'metal'}},
        {id: 5, title: 'Ring_5', price: 500, status: 'есть в наличии', descr: {width: '8', material: 'wood'}},
        {id: 6, title: 'Ring_6', price: 2100, status: 'под заказ', descr: {width: '12', material: 'metal'}},
    ]
}

const storePageReducer = (state=initialState, action) => {
    return state;
}


export default storePageReducer;