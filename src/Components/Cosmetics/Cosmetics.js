import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

import './Cosmetics.css'
const Cosmetics = () => {
   const cosmetics=[
    {
      "id": "64202e08de2554a2de0b517a",
      "age": 33,
      "name": "Harris Jordan"
    },
    {
      "id": "64202e081995867e1e81b45f",
      "age": 34,
      "name": "Herring Roman"
    },
    {
      "id": "64202e08d8416b90a196547c",
      "age": 20,
      "name": "Cook Gonzales"
    },
    {
      "id": "64202e08a957fcc6788d896f",
      "age": 20,
      "name": "Sexton Chapman"
    },
    {
      "id": "64202e08b6eeeb426719d4ae",
      "age": 24,
      "name": "Ina Hutchinson"
    },
    {
      "id": "64202e088c01ca1496b7ab45",
      "age": 25,
      "name": "Carver Byers"
    }
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