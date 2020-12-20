import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

import './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
   children?: any;
}

export function Layout(props: LayoutProps) {
   return (
      <div>
         <Header />
         <h1>Welcome to layout!</h1>
         {props.children}
         <Footer />
      </div>
   );
}

export default Layout;
