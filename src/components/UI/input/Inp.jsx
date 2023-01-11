import React from 'react'
import classes from './Inp.module.css'

const Inp = React.forwardRef((props, ref) => {
    return(
        <input ref={ref} className={classes.myInp} {...props}/>
    )
})

export default Inp