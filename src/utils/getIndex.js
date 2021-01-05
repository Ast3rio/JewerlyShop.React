export const getIndex = (arr, getId) => {
    return arr.findIndex(({ id }) => id == getId) + 1
};