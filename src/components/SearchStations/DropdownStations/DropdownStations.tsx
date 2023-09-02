"use client"

import React from 'react'
import styles from './styles.module.css'

import StationItem from './StationItem'
import { Station } from '@/models/station'

interface Props {
  data : Station[],
  onStationClick: (station:Station) => void,
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownStations: React.FC<Props> = ({
  data ,
  onStationClick,
  setShowSuggestions
}) =>{
  return (
    <div className={styles.dropDownList} >
      {data.map((data, index) => { 
        return (
          <StationItem key={index} data={data} onStationClick={onStationClick} setShowSuggestions={setShowSuggestions}/>
        )
      })}
    </div>
  )
}

export default DropdownStations