import axios from "axios"

export const getUserTickets = async () => {
  const accessToken = sessionStorage.getItem('token')
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const {data} = await axios.get(
    `http://localhost:8080/api/v1/tickets`,
    {headers}
  )

  return data
} 