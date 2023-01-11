import React from 'react';
import classes from './Btn.module.css';

const Btn = ({children, ...props}) => {
    return(
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default Btn