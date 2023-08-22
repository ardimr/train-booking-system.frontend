import ContactDetails from '@/components/ContactDetails/ContactDetails'
import React from 'react'
import styles from './page.module.css'
import BookingForm from '@/components/BookingForm/BookingForm'

const BookingPage = () => {
  return (
    <div className={styles.bookingPage}>
        <div style={{marginTop:"50px"}} />
        <BookingForm />
    </div>
  )
}

export default BookingPage