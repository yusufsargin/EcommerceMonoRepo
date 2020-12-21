import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../../assets/dummyData/products';

export const HomeScreen = () => {
   return (
      <>
         <h1>Latests Products</h1>
         <Row>
            {products.map((item, index) => {
               return (
                  <Col sm={12} md={6} lg={4} xl={3} key={index}>
                     <h3>{item.name}</h3>
                  </Col>
               );
            })}
         </Row>
      </>
   );
};
