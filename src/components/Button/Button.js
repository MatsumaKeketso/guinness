import React from 'react';
const Button = ({ type, label, event }) => {
    return <div onClick={event} className={type == 'primary' ? 'button-primary' : 'button-secondary'}>
        <p className='button-text'>{label}</p>
    </div>;
}

export default Button;
