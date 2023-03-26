import React from 'react';


const Cosmetic = (props) => {
    const{name,price,id}=props.cosmetic;
    // console.log(props)
    return (
        <div>
            <h2>buy:{name}</h2>
            <p>price;{price}</p>
            <h3>id:{id}</h3>
        </div>
    );
};

export default Cosmetic;