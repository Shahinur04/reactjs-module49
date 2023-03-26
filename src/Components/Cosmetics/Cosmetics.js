import React from 'react';
import add from '../../Utilites/Calculate';
import './Cosmetics.css'
const Cosmetics = () => {
    const first=55;
    const second=22;
    const total=add(first,second);
    return (
        <div className='container'>
            <h1>Welcome to my cosmetics shop</h1>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cosmetics;