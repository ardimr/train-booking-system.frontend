"use client"
import ContactDetails from '@/components/ContactDetails/ContactDetails'
import React from 'react'
import styles from './page.module.css'
import BookingForm from '@/components/BookingForm/BookingForm'
import TravelInfo from '@/components/BookingForm/TravelInfo'
import { useSearchParams } from 'next/navigation'

const BookingPage = () => {
  const searchParams = useSearchParams()
  // console.log(searchParams.get("travelId"))
  return (
    <div className={styles.bookingPage}>
        <div style={{marginTop:"50px"}} />
        <BookingForm />
        <div style={{marginLeft:"20px", marginTop:"20px", position:"sticky"}}>
          <TravelInfo/>
        </div>
    </div>
  )
}

export default BookingPage