import React from 'react';
import { IProduct } from '../../interfaces/product/product.interface';

export const Product = ({ _id, name, description, image }: IProduct) => {
   return (
      <div>
         <h3>{name}</h3>
         <p>{description}</p>
         <img src={image} alt="test" />
      </div>
   );
};
