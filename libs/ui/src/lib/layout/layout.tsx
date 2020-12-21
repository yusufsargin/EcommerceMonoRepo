import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

import './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
  children?: any;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
