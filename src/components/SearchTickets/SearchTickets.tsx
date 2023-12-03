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
  const {control, handleSubmit, getValues, formState} = useForm<SearchFormInput>(
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
  const {data:travelData, isLoading, refetch} = useTravels(search)
  
  const onSubmit: SubmitHandler<SearchFormInput> = async (form) => {
    setSearch(form)
  }

  const router = useRouter()


  const handleOnSelect = (travelId: number, wagonClass: string) => {
    router.push(`/booking?travel-id=${travelId}&wagon-class=${wagonClass}&total-passengers=${search.totalPassengers}`)

  }

  return (
    <div style={{display: "flex", flexDirection:"column", alignItems:"center", marginBottom:"20px"}}>
      
      <SearchTicketForm 
        control={control}
        onSubmit={onSubmit}
        handleSubmit = {handleSubmit}
      />
      
      <div style={{height:'35px'}} />

      {formState.isSubmitted
        ? isLoading
          ? <div> Searching Tickets ... </div>
          : travelData
            ? travelData.map((travel:TravelData, index:number) =>
              <TravelCard key={index} travelData={travel} onSelect={handleOnSelect}/>
              )
            : <div> Ooops.. No Train is Avaliable </div>
        : <></>
      }
    </div>
  )
}

export default SearchTickets