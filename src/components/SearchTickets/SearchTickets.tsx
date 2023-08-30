import TravelCard from "@/components/TravelCard/TravelCard"
import { useTravels } from "@/hooks/useTravels"
import { TravelData } from "@/models/travel"
import { QueryClient, QueryClientProvider } from "react-query"
import SearchTicketForm from "./SearchTicketForm"

const SearchTickets = () => {
  const {data} = useTravels()
  console.log(data)
  return (
    <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
      <SearchTicketForm />
        <div style={{height:'35px'}} />
        
        {data?.map((travel:TravelData, index:number) =>
          <TravelCard key={index} travelData={travel} />
        )}
    </div>
  )
}

export default SearchTickets