import React from 'react';
import { multiply } from '../../Utilites/Calculate';


const Shoes = () => {
    const first=12;
    const second=13;
    const total=multiply(first,second);
    return (
        <div>
           <h2>This is Shoes-store</h2>
           <p>Multiply:{total}</p> 
        </div>
    );
};

export default Shoes;