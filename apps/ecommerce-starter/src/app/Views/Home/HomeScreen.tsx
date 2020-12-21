import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../../assets/dummyData/products';
import { Product } from '../../shared/components/Product';
import { IProduct } from '../../shared/interfaces/product/product.interface';

export const HomeScreen = () => {
   return (
      <>
         <h1>Latests Products</h1>
         <Row>
            {products.map((item: IProduct, index) => {
               return (
                  <Col sm={12} md={6} lg={4} xl={3} key={index}>
                     <Product {...item} />
                  </Col>
               );
            })}
         </Row>
      </>
   );
};
