import React from 'react';
import s from './Subscribe.module.scss';

const Subscribe = (props) =>{

    let newSubscribeElement = React.createRef();
    
    let onTextChange = () =>{
        let text = newSubscribeElement.current.value;
        props.updateSubscribeText(text);
    }

    let onSubscribeClick = (e)=> {
        e.preventDefault();
        console.log(props.newSubscribeText);
    }

    return(
        <div className={s.subscribe}>
            Подписаться:
            <form>
                <input onChange={onTextChange} ref={newSubscribeElement} type="email" placeholder="e-mail" value={props.newSubscribeText}/>
                {props.subscribe ? <button>Вы подписаны</button> : <button onClick={onSubscribeClick}>Подписаться</button>}
            </form>
        </div>
    )
}


export default Subscribe;