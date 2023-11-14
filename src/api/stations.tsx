export const fetchStations = async (input: string)=> {
  const res = await fetch(
      `http://${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/v1/stations?input_station=${input}`, {
          method: 'GET'
      }
  )

  const stations = await res.json()
  return stations
}