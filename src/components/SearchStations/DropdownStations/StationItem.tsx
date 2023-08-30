import React from 'react'
import styles from './styles.module.css'
import { DataModel } from './Model'

interface DropdownItemProps {
  data : DataModel,
  setSelectedStationName: React.Dispatch<React.SetStateAction<string>>,
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>
}
const StationItem = (
  {
    data,
    setSelectedStationName,
    setShowSuggestions,
  } : DropdownItemProps
) => {

  const onClickHandler = (event : React.MouseEvent<HTMLDivElement>) => {
    setSelectedStationName(data.title)
    setShowSuggestions(false)
  }
  const onBlurHandler = () => {
    console.log("Not focus")
    // if (stationInput === '') {
    //     setShowSuggestions(false)

    // }
  }
  return (
    <div className={(styles.dropdownItem)}  onClick={onClickHandler} onBlur={onBlurHandler}> 
      <div>
        <div> {data.title} </div>
        <p> {data.caption}</p>
      </div>
    </div>
  )
}

export default StationItem