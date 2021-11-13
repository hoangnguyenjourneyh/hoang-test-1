import React from 'react';
import { MainLayout } from './commons/layouts/MainLayout';
import { HomePage } from './pages/HomePage/HomePage';

const App = () => {
  return (
    <MainLayout>      
      <HomePage />
    </MainLayout>
  );
}

export default App;

