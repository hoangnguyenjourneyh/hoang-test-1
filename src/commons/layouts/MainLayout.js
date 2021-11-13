import React from 'react';
import css from './MainLayout.module.css';
import { Header } from './Header';

export const MainLayout = props => {    
    const { children } = props;
    return (
        <div className={css.wrapperContainer}>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}