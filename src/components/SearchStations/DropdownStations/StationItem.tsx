import React from 'react'
import styles from './styles.module.css'
import { Station } from '@/models/station'

interface DropdownItemProps {
  data : Station,
  onStationClick: (station:Station) => void,
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>
}

const StationItem = (
  {
    data,
    onStationClick,
    setShowSuggestions,
  } : DropdownItemProps
) => {

  const onClickHandler = (event : React.MouseEvent<HTMLDivElement>) => {
    const station:Station = {
      name:data.name,
      code: data.code,
      city: data.city,
      label: data.label
    }
    onStationClick(data)
    setShowSuggestions(false)
  }

  return (
    <div className={(styles.dropdownItem)}  onClick={onClickHandler} > 
      <div>
        <div> {data.city} </div>
        <p> {data.label}</p>
      </div>
    </div>
  )
}

export default StationItem