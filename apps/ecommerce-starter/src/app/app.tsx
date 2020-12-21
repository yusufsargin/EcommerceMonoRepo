import React from 'react';
import styles from './app.module.scss';
import { Layout } from '@ecommerce-app/ui';
import { Container } from 'react-bootstrap';

export function App() {
  return (
    <div className={styles.greenBack}>
      <Layout>
        <main className='py-3' >
          <Container>
            <h1>Welcome to ProShop</h1>
          </Container>
        </main>
      </Layout>
    </div>
  );
}

export default App;
