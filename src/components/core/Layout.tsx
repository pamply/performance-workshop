import React from 'react';
import { Header } from './Header';
import './layout.css';

export const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      {props.children}
    </div>
  );
};
