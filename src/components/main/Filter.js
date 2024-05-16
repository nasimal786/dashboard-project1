import React from 'react'

const Filter = () => {
  return (
    <div className='filter'>
        <p>FILTER OPTIONS</p>
      <div className='filter_level'>
        <input type="checkbox"  name="filter1" />
        <label for="filter1">Gatesurvey</label>
        <br />
        <input type="checkbox" name="filter2" />
        <label for="filter2">Fraud_detection</label>
        
      </div>
    </div>
  )
}

export default Filter