import axios from "axios"

export const getUserTickets = async () => {
  const accessToken = localStorage.getItem('token')
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

export const getTicketDetails = async (id:number) => {
  const accessToken = localStorage.getItem('token')
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const {data} = await axios.get(
    `http://localhost:8080/api/v1/tickets/${id}`,
    {headers}
  )

  return data
}