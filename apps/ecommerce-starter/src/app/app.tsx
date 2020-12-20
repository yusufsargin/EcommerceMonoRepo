import React from 'react';
import styles from './app.module.scss';
import { Layout } from '@ecommerce-app/ui';

export function App() {
   return (
      <div className={styles.app}>
         <Layout>
            <h5>Deneme</h5>
         </Layout>
      </div>
   );
}

export default App;
