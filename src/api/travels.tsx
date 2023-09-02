import { SearchFormInput } from "@/components/SearchTickets/SearchTickets";
import axios from "axios";

export const fetchTravels = async (form: SearchFormInput) => {
  const {data} = await axios.get(`http://localhost:8080/api/v1/travels?departure_station_code=${form.departureStation.code}&destination_station_code=${form.destinationStation.code}&departure_date=2023-07-07`)
  return data
}
