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
    `http://${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/v1/tickets/${id}`,
    {headers}
  )

  return data
}

export const payBooking = async (travel_id: number, booking_code: string) => {
  const accessToken = localStorage.getItem('token')
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  const {data} = await axios.get(
    `http://${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/v1/bookings/payment/webhook?travel_id=${travel_id}&booking_code=${booking_code}`,
    {headers}
  )
  
  return data
}