export const required = value => {
    if(value) return undefined;
    return 'Field is empty';
}

export const maxLengthCreator = (maxLength) => value => {
    if(value.length > maxLength) return `Max length ${maxLength} is error`;
    return undefined;
}

export const minLengthCreator = (minLength) => value => {
    if(value.length < minLength) return `Min length ${minLength} is error`;
    return undefined;
}