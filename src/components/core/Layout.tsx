import React, { ReactChild } from 'react';
import { Header } from './Header';
import './layout.css';

interface LayoutProps {
  children: ReactChild;
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      {props.children}
    </div>
  );
};
