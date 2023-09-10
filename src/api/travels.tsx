import { SearchFormInput } from "@/components/SearchTickets/SearchTickets";
import axios from "axios";

export const fetchTravels = async (form: SearchFormInput) => {
  const selectedDate = form.selectedDate.format('YYYY-MM-DD')
  const {data} = await axios.get(`http://localhost:8080/api/v1/travels?departure_station_code=${form.departureStation.code}&destination_station_code=${form.destinationStation.code}&departure_date=${selectedDate}`)
  return data
}

export const fetchTravelById = async (travelId:number, wagonClass:string) => {
  const {data} = await axios.get(`http://localhost:8080/api/v1/travels/${travelId}?wagon_class=${wagonClass}`)
  return data
}
