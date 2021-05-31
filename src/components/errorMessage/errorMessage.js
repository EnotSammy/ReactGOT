import React from 'react';
import img from './errorMessage.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt=''></img>
            <span>Something goes wrong :(</span>
        </>
    )
    
}
export default ErrorMessage;