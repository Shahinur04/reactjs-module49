import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

import './Cosmetics.css'
const Cosmetics = () => {
   const [Cosmetics,setCosmetics]=useState([]);
   useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setCosmetics(data))
   },[])
    return (
        <div >
            <h1>Welcome to my cosmetics shop</h1>
           <div className='div'>
           {
            Cosmetics.map(cosmetic=><Cosmetic key={cosmetic.id}
            cosmetic={cosmetic}></Cosmetic>)
           }
           </div>
        </div>
    );
};

export default Cosmetics;