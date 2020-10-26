import React from 'react';

const Quote = ({quote,character,image}) => {
    return(
        <div>
            <h1>{quote}</h1>
            <p>{character}</p>
            <img src={image} alt=""/>
        </div>
    )
}

export default Quote;