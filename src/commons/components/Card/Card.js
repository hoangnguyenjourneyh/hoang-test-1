import React from 'react';
import css from './Card.module.css';

export const Card = props => {
    const { srcImg } = props;
    return (
        <div className={css.card}>
            <img src={srcImg} width='100%' height='auto' className={css.cardImage} alt='cardImage'/>
            <div className={css.content}></div>
        </div>
    )
}
