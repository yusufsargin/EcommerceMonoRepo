import React from 'react';
import { IProduct } from '../../interfaces/product/product.interface';

export const Product = ({ _id, name, description }: IProduct) => {
   return (
      <div>
         <h3>{name}</h3>
         <p>{description}</p>
      </div>
   );
};
