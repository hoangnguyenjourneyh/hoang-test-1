import React from 'react';
import { Card } from '../../../commons/components/Card/Card';

import cardImg from './assets/cardImg.png';
import css from './SectionBanner.module.css';

export const SectionBanner = props => {
  return (
    <div className={css.root}>
      <div className={css.bannerContent}>
        <p className={css.bannerSubTitle}>
          Completely free to mint your first NFT
        </p>
        <h1 className={css.bannerMainTitle}>
          Turn any creation info an item on the blockchain
        </h1>
        <p className={css.bannerSubTitle}>
          Trade digital items on Mintable to easily earn crypto
        </p>
      </div>
      <div className={css.bannerCard}>
        <Card srcImg={cardImg} />
      </div>
    </div>
  );
};

