import React from 'react';

import './newChallenge.css';
const NewChallenge = ()=>{
    return(
        <div className='newChallenge'>
            <div className='newChallenge__avtar'>
                    <img  className='newChallenge__avtar--img' src={'/avtar.jpg'} alt='img'/>
            </div>
            <input className="newChallenge__newPost--input" type='text' placeholder='Ready for a new challenge… ?' />


               
        </div>
    )
}

export default NewChallenge;

