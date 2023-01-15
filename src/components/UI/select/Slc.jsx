import React from 'react'
import classes from './Slc.module.css'

const Slc = ({options, defaultValue, value, onChange}) => {

    function selectActive(event) {
        event.target.classList.add(classes.mySlcActive)
    
    }
    
    function selectDisable(event) {
        event.target.classList.remove(classes.mySlcActive)
    }

    return(
        <select 
        value={value}
        className={classes.mySlc}
        onFocus={selectActive} onBlur={selectDisable}
        onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                {option.name}
                </option>
                )}
        </select>
    )
}


export default Slc