"use client"
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm'
import React from 'react'
import styles from './page.module.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import RootLayout from '@/components/Layout/Layout'

const queryClient = new QueryClient()
const page = () => {
  return (
    <RootLayout>
      <div className={styles.container}>
          <RegistrationForm />
      </div>
    </RootLayout>
  )
}

export default page