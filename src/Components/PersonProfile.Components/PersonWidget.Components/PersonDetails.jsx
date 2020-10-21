import React from 'react';
import Potamous from '../../../Images/Potamous.png'


function PersonDetails() {
    return <div className='personDetails'>
        <img src={Potamous} class='personPhoto' />
        <button className='notReal'>
            Felonies:
        <br /> 3<br /> 1/2</button>
        <button className='notReal'>
            Posts:16K
        </button>
        <button className='notReal'>
            Followers:<br />Mother
        </button>
        <button className='notReal'>
            Following:<br />Everyone
        </button>
    </div >;

}
export default PersonDetails