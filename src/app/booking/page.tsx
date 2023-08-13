import ContactDetails from '@/components/ContactDetails/ContactDetails'
import React from 'react'
import styles from './page.module.css'

const BookingPage = () => {
  return (
    <div className={styles.bookingPage}>
        <ContactDetails />
    </div>
  )
}

export default BookingPage