import React from 'react';
import OrderDetails from './OrderDetails';
import Orders from './Orders';

const FoodOrder = () => {
  return (
    <div className='flex gap-6 w-full'>
      <Orders />
      <OrderDetails />
    </div>
  );
};

export default FoodOrder;
