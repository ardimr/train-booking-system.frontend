import axios from "axios"

export const getAvailableSeats = async (travel_id: number, wagon_class:string) => {
  const {data} =  await axios.get(`http://${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/v1/seats?travel_id=${travel_id}&wagon_class=${wagon_class}`)
  return data
}