import React from 'react';
import styles from './app.module.scss';
import { Layout } from '@ecommerce-app/ui';
import { Container } from 'react-bootstrap';
import { HomeScreen } from './Views/Home';

export function App() {
   return (
      <div className={styles.greenBack}>
         <Layout>
            <main className="py-3">
               <Container>
                  <HomeScreen />
               </Container>
            </main>
         </Layout>
      </div>
   );
}

export default App;
