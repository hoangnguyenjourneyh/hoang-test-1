
import React from 'react';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import css from './Header.module.css'
import { SearchComponent } from './Search';

const navbarList = [
  {
      id: 1,
      name: 'Browse',
      link: '#',
  },
  {
      id: 2,
      name: 'Discover',
      link: '#',
  },
  {
      id: 3,
      name: 'Mint an item',
      link: '#',
  },
  {
      id: 4,
      name: 'Others',
      link: '#',
  },
];

export const Header = () => {

  return (  
    <header>    
      <Grid container spacing={0}>
        <div className={css.headerContainer}>
          <a className={css.logo} href='/'>
            <img src='/logo.svg' alt='logo'/>
          </a>
          <Select
            labelId="select-label"
            id="select-helper"
            value={''}
            displayEmpty
            label="All Categories"
            variant="standard"
            className={css.select}
            disableUnderline
          >
            <MenuItem value={''}>All Categories</MenuItem>
            <MenuItem value={1}>Category1</MenuItem>
            <MenuItem value={2}>Category2</MenuItem>
            <MenuItem value={3}>Category3</MenuItem>
          </Select>
          <SearchComponent />
          <div className={css.navbar}>
            {navbarList.map( navbar => (
              <a href={navbar.link} 
                key={navbar.id} 
                className={css.item}>
                {navbar.name}
              </a>
            ))}            
          </div>
          <button className={css.buttonLogin}> Login</button>
          <button className={css.buttonSignup}> Sign up</button>
          <Select
            labelId="select-label"
            id="select-helper"
            defaultValue={1}
            displayEmpty
            label="All Categories"
            className={css.selectCurrency}
          >
            <MenuItem value={1}>Ethereum</MenuItem>
            <MenuItem value={2}>Bitcoin</MenuItem>
            <MenuItem value={3}>XDS</MenuItem>
          </Select>
        </div>            
      </Grid>
    </header>      
  ) 
}