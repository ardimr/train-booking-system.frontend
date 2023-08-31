import TravelCard from "@/components/TravelCard/TravelCard"
import { useTravels } from "@/hooks/useTravels"
import { TravelData } from "@/models/travel"
import { QueryClient, QueryClientProvider } from "react-query"
import SearchTicketForm from "./SearchTicketForm"
import dayjs, { Dayjs } from "dayjs"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"

export interface SearchFormInput {
  departureStation: string
  destinationStation: string
  selectedDate: Dayjs
  totalPassengers: number
}

const SearchTickets = () => {
  const {data} = useTravels()
  const [departureStation, setDepartureStation] = useState<string>("")
  const [destinationStation, setDestinationStation] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<Dayjs|null>(dayjs())
  const [totalPassengers, setTotalPassengers] = useState<number>(1)

  const [searchForm, setSearchForm] = useState<SearchFormInput>(
    {
      departureStation:"",
      destinationStation: "",
      selectedDate: dayjs(),
      totalPassengers:1
    }
  )
  
  const handleOnSubmit = () => {
    console.log(departureStation, destinationStation, selectedDate?.format('DD/MM/YYYY'),totalPassengers)
  }
  // console.log(data)
  return (
    <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
      
      <SearchTicketForm 
        departureStation={departureStation}
        setDepartureStation={setDepartureStation}
        destinationStation={destinationStation}
        setDestinationStation={setDestinationStation}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalPassengers={totalPassengers}
        setTotalPassengers={setTotalPassengers}
        handleOnSubmit={handleOnSubmit}
      />
      
      <div style={{height:'35px'}} />
      
      {data?.map((travel:TravelData, index:number) =>
        <TravelCard key={index} travelData={travel} />
      )}
    </div>
  )
}

export default SearchTickets