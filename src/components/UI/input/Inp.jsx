import React from 'react'
import classes from './Inp.module.css'

function inputActive(event) {
    event.target.classList.add(classes.myInpActive)

}

function inputDisable(event) {
    event.target.classList.remove(classes.myInpActive)
}

const Inp = React.forwardRef((props, ref) => {
    return(
        <input ref={ref} className={classes.myInp} onFocus={inputActive} onBlur={inputDisable} {...props}/>
    )
})

export default Inp