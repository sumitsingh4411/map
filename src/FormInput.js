import React, { useState , useEffect } from 'react'
import Select from '@material-ui/core/Select';
import { FormControl,MenuItem, } from '@material-ui/core';
import { useStateValue } from './stateprovider';
function FormInput() {
    const [{country}, dispatch] = useStateValue();
    const[coun,setcount]=useState('India');
    useEffect(()=>{
        dispatch({
            type: "SET_COUNTRY",
            country: coun,
        })
    },[coun])
    return (
        <FormControl>
        <Select
          value={coun}
          onChange={e=>setcount(e.target.value)}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="United States" >United States</MenuItem>
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="United Kingdom">United Kingdom</MenuItem>
        </Select>
      </FormControl>
    )
}

export default FormInput
