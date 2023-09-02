import axios from "axios"

export const getAvailableSeats = async (travel_id: number, wagon_class:string) => {
  const {data} =  await axios.get(`http://localhost:8080/api/v1/seats?travel_id=${travel_id}&wagon_class=${wagon_class}`)
  return data
}