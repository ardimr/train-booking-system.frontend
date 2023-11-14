"use client"

import ContactDetails from '@/components/ContactDetails/ContactDetails'
import React from 'react'
import styles from './page.module.css'
import BookingForm from '@/components/BookingForm/BookingForm'
import TravelInfo from '@/components/BookingForm/TravelInfo'
import { useSearchParams } from 'next/navigation'
import { fetchTravelById } from '@/api/travels'
import { QueryClient, QueryClientProvider } from 'react-query'
import RootLayout from '@/components/Layout/Layout'


const BookingPage = () => {
  const searchParams = useSearchParams()
  // console.log(searchParams.get("travelId"))
  return (
    <RootLayout>
      <div className={styles.bookingPage}>
        <div style={{marginTop:"50px"}} />
        <BookingForm />
        <div style={{marginLeft:"20px", marginTop:"20px", position:"sticky"}}>
          <TravelInfo/>
        </div>
      </div>
    </RootLayout>
  )
}

export default BookingPage