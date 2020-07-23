import React from 'react';
import s from './Subscribe.module.scss';

const Subscribe = (props) =>{

    let newSubscribeElement = React.createRef();
    
    let onTextChange = () =>{
        let text = newSubscribeElement.current.value;
        props.updateSubscribeText(text);
    }

    return(
        <div className={s.subscribe}>
            Подписаться:
            <form>
                <input onChange={onTextChange} ref={newSubscribeElement} type="email" placeholder="mail@mail.com" value={props.newSubscribeText}/>
                {props.subscribe ? <button onClick={(e)=>{
                    e.preventDefault();
                    console.log("Пользователь отписался");
                    props.setSubscribe(false);
                }}>Отписаться</button> : <button onClick={(e)=>{
                    e.preventDefault();
                    console.log('Добавлен новый подписчик: ' + props.newSubscribeText);
                    props.setSubscribe(true);
                    props.updateSubscribeText('');
                }}>Подписаться</button>}
            </form>
        </div>
    )
}


export default Subscribe;