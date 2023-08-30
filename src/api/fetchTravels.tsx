import axios from "axios";

export const fetchTravels = async () => {
  const {data} = await axios.get('http://localhost:8080/api/v1/travels?departure_station_code=BD&destination_station_code=TG&departure_date=2023-07-07')
  return data
}
