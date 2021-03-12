import React from 'react'

function Button({children, handleClick, classList}) {
    return (
        <button onClick={handleClick} className={classList}>
            {children}
        </button>
    );
};

export default Button;
