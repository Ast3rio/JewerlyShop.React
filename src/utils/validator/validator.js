export const required = value => {
    if(value) return undefined;
    return 'Пустая строка';
}

export const maxLengthCreator = (maxLength) => value => {
    if(value.length > maxLength) return `Максимальное количество символов ${maxLength}`;
    return undefined;
}

export const minLengthCreator = (minLength) => value => {
    if(value.length < minLength) return `Минимальное количество символов ${minLength}`;
    return undefined;
}