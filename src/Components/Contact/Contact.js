import React from 'react';

import './contact.css'

function Contact({firstName, lastName, phone, gender}){
    let genderSign = ''
    if(gender === 'male'){
        genderSign = <span>&#9794;</span> 
    }else if(gender === 'female'){
        genderSign = <span>&#9792;</span>
    }else{
        genderSign = <span>&#9900;</span>
    }
    
    return(
        <li className='contact'>
            <p className='name'>{firstName} {lastName}</p>
            <p className='gender'>{genderSign}</p>
            <p className='phone'>{phone} </p>
        </li>
    )
}
export default Contact;