import { useState, useRef } from "react"

import React from 'react'
import DropdownStations from "./DropdownStations/DropdownStations"
import Input from "./DropdownStations/InputStation"
import { useQuery } from "react-query";
import styles from './styles.module.css'
import { useOnClickOutside } from "usehooks-ts"
import { useStations } from "@/hooks/useStations"
import { Station } from "@/models/station"


type Props = {
  placeholder:string
  selectedStation: Station
  onChange: (...event: any[]) => void
  name: string

}
const SearchStations = ({placeholder, selectedStation,onChange, name }: Props) => {
  const [stationInput, setStationInput] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  
  const ref = useRef(null)

  const {data} = useStations(stationInput)

  const handleClickOutside = () => {
      setStationInput(selectedStation.name)
    if (showSuggestions) {
      setShowSuggestions(false)
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStationInput(e.target.value)
    setShowSuggestions(true)
  }
  
  const handleOnClickStation = (station:Station) => {
    onChange(station)
    setStationInput(station.name)
  }
  

  const stations = data?.map((station:any) => {
    const res:Station = {
        name : station.name,
        code : station.code,
        city : station.city_name,
        label : station.label,
    }
    return res
  })

  useOnClickOutside(ref, handleClickOutside)

  return (
    <div ref={ref} className={styles.searchStations}>
      <Input
        label='Search'
        name={name}
        onChange={handleNameChange}
        setShowSuggestions={setShowSuggestions}
        type='text'
        placeholder={placeholder}
        value={stationInput}
      />
      { showSuggestions 
        &&  stations !=null 
        && <DropdownStations 
              data = {stations}
              onStationClick={handleOnClickStation}
              setShowSuggestions={setShowSuggestions}
            />
      }
    </div>
  )
}

export default SearchStations