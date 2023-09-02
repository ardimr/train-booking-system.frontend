export const fetchStations = async (input: string)=> {
  const res = await fetch(
      `http://localhost:8080/api/v1/stations?input_station=${input}`, {
          method: 'GET'
      }
  )

  const stations = await res.json()
  return stations
}