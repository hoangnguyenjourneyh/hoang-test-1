import React from 'react';
import css from './Card.module.css';

export const Card = props => {
    const { srcImg, avatarSrc, userName, itemName, price } = props;
    return (
        <div className={css.card}>
            <div>
                <img src={srcImg} width='100%' height='auto' className={css.cardImage} alt='cardImage'/>
            </div>
            <div className={css.content}>
                <div className={css.leftContent}>
                    {avatarSrc && <img src={avatarSrc} width='100%' height='auto' className={css.avatarSrc} alt='cardImage'/>}
                    <span> {userName} </span>
                </div>
                <div className={css.rightContent}>
                    <p className={css.item}> {itemName} </p>
                    <p className={css.item}> {price} </p>
                </div>
            </div>
        </div>
    )
}
