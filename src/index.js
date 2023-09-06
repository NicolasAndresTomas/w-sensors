import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import NavigationBarComponent from './navigationBarComponent';
import SideBarComponent from './sideBarComponent';
import OverviewComponent from './overviewComponent';
import ProfileComponent from './profileComponent';

ReactDOM.render(
  <BrowserRouter>
    <div className="app">
      <NavigationBarComponent />
      <div className="main-content">
        <SideBarComponent />
        <div className="overview-wrapper">
          <Routes>
            <Route path='/overview' element={<OverviewComponent />} />
            <Route path='/profile' element={<ProfileComponent />} />
            <Route path='*' element={<OverviewComponent />} /> {}
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);