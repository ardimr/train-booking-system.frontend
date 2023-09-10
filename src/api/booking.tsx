import { NewBookingData } from '@/models/booking'
import axios from 'axios'
import React from 'react'

export const PostNewBooking = (bookingData: NewBookingData) => {
  return axios.post('http://localhost:8080/api/v1/bookings', bookingData)
}

