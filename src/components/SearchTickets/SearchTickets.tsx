import TravelCard from "@/components/TravelCard/TravelCard"
import { useTravels } from "@/hooks/useTravels"
import { TravelData } from "@/models/travel"
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query"
import SearchTicketForm from "./SearchTicketForm"
import dayjs, { Dayjs } from "dayjs"
import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import { useState } from "react"
import { Station } from "@/models/station"
import { useRouter } from "next/navigation"


export interface SearchFormInput {
  departureStation: Station
  destinationStation: Station
  selectedDate: Dayjs
  totalPassengers: number
}

const SearchTickets = () => {
  const {control, handleSubmit, getValues} = useForm<SearchFormInput>(
    {
      defaultValues: {
        departureStation: {
          name:"",
          code:""
        },
        destinationStation: {
          name:"",
          code:""
        },
        selectedDate: dayjs(),
        totalPassengers: 1
      },
    }
  )
  
  
  const [search, setSearch] = useState<SearchFormInput>(getValues)
  const {data:travelData} = useTravels(search)
  
  const onSubmit: SubmitHandler<SearchFormInput> = async (form) => {
    // console.log(form.selectedDate.format('YYYY/MM/DD'))
    setSearch(form)
  }

  const router = useRouter()


  const handleOnSelect = (travelCode: number) => {
    router.push(`/booking?travel-code=${travelCode}&total-passengers=${search.totalPassengers}`)

  }

  // console.log(data)
  return (
    <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
      
      <SearchTicketForm 
        control={control}
        onSubmit={onSubmit}
        handleSubmit = {handleSubmit}
      />
      
      <div style={{height:'35px'}} />
      
      {travelData?.map((travel:TravelData, index:number) =>
        <TravelCard key={index} travelData={travel} onSelect={handleOnSelect}/>
      )}
    </div>
  )
}

export default SearchTickets