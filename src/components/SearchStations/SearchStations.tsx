import { useState, useRef } from "react"
import { DataModel } from "../DropdownStations/Model"

import React from 'react'
import DropdownStations from "../DropdownStations/DropdownStations"
import Input from "../Input/InputStation"
import { useQuery } from "react-query";
import styles from './styles.module.css'
import { useOnClickOutside } from "usehooks-ts"


const fetchStations = async (input: string)=> {
    const res = await fetch(
        `http://localhost:8080/api/v1/stations?input_station=${input}`, {
            method: 'GET'
        }
    )

    const stations = await res.json()
    return stations
}
const SearchStations = () => {
  const [stationInput, setStation] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const ref = useRef(null)

  const handleClickOutside = () => {
    if (showSuggestions) {
      setShowSuggestions(false)
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStation(e.target.value)
    setShowSuggestions(true)
    // console.log(stationFilteredList)
  }
  
  const { data, isError, isLoading } = useQuery({
    queryKey : ['fetchStations', stationInput],
    queryFn: () => fetchStations(stationInput),
  })

  const stations = data?.map((station:any) => {
    const res:DataModel = {
        'title' : station.name,
        'caption' : station.label
    }
    return res
  })

  useOnClickOutside(ref, handleClickOutside)

  return (
    <div ref={ref} className={styles.searchStations}>
      <Input
        label='Search'
        name='name'
        onChange={handleNameChange}
        setShowSuggestions={setShowSuggestions}
        type='text'
        placeholder='Search stations'
        value={stationInput}
      />
      {showSuggestions &&  stations !=null && <DropdownStations data = {stations}   setSelectedStationName={setStation} setShowSuggestions={setShowSuggestions}/>}
    </div>
  )
}

export default SearchStations

//   const stations:DataModel[] = [
//     {title: "Bandung", caption:"BD"}, 
//     {title: "Tegal", caption:"TG"}, 
//     {title: "Semarang", caption:"TG"},
//     {title: "Surabaya", caption:"TG"},
//     {title: "Jakarta", caption:"TG"},
//     {title: "Surakarta", caption:"TG"},
//     {title: "Malang", caption:"TG"},
//     {title: "Cirebon", caption:"TG"},
//     {title: "Bekasi", caption:"TG"},
//     {title: "Yogyakarta", caption:"TG"}
//   ]

//   const stationFilteredList = stations.filter((station) => {
//     if (stationInput === '') {
//       return null
//     } else {
//       return station.title.toLowerCase().includes(stationInput.toLowerCase())
//     }
//   })  