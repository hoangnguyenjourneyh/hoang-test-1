import React from 'react';
import css from './HomePage.module.css';
import { SectionBanner } from './SectionBanner/SectionBanner';

export const HomePage = () => {  
  return (    
    <div className={css.container}>
      <SectionBanner
        rootClassName={css.heroRoot}
        className={css.hero}
      />
    </div>
  );
}

export default HomePage;