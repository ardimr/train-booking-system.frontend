"use client"

import React from 'react'
import styles from './styles.module.css'

import StationItem from './StationItem'
import { DataModel } from './Model'

interface Props {
  data : DataModel[],
  onStationClick: (station:string) => void,
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownStations: React.FC<Props> = ({
  data ,
  onStationClick,
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
          <StationItem key={index} data={data} onStationClick={onStationClick} setShowSuggestions={setShowSuggestions}/>
        )
      })}
    </div>
    
  )
}

export default DropdownStations