"use client"

import React from 'react'
import styles from './styles.module.css'

import DropdownItem from './DropdownItem'
import { DataModel } from './Model'

interface Props {
  data : DataModel[],
  setSelectedStationName: React.Dispatch<React.SetStateAction<string>>,
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownList: React.FC<Props> = ({
  data ,
  setSelectedStationName,
  setShowSuggestions
}) =>{
  const onBlurHandler = (e: React.FocusEvent<HTMLDivElement> ) => {
    console.log("Not focus")
    // if (stationInput === '') {
        // setShowSuggestions(false)

    // }
  }
  return (
    <div className={styles.dropDownList} onBlur={onBlurHandler}>
      {data.map((data, index) => { 
        return (
          <DropdownItem key={index} data={data} setSelectedStationName={setSelectedStationName} setShowSuggestions={setShowSuggestions}/>
        )
      })}
    </div>
    
  )
}

export default DropdownList