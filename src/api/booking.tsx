import { NewBookingData } from '@/models/booking'
import axios from 'axios'
import React from 'react'

export const PostNewBooking = (bookingData: NewBookingData) => {
  const accessToken = localStorage.getItem('token')
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  
  return axios.post(`http://${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/v1/bookings`, bookingData, {headers})
}

