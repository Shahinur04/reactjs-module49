import React from 'react';


const Cosmetic = (props) => {
    const{name,age,id}=props.cosmetic;
    // console.log(props)
    return (
        <div>
            <h2>buy:{name}</h2>
            <p>Age;{age}</p>
            <h3>id:{id}</h3>
        </div>
    );
};

export default Cosmetic;