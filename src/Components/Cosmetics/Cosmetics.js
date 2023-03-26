import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

import './Cosmetics.css'
const Cosmetics = () => {
   const cosmetics=[
    {name:'alta',id:1,price:200},
    {name:'blta',id:2,price:300},
    {name:'mlta',id:3,price:400},
    {name:'klta',id:4,price:500},
    {name:'jlta',id:5,price:100}
   ]
    return (
        <div className='container'>
            <h1>Welcome to my cosmetics shop</h1>
           {
            cosmetics.map(cosmetic=><Cosmetic key={cosmetic.id}
            cosmetic={cosmetic}></Cosmetic>)
           }
        </div>
    );
};

export default Cosmetics;