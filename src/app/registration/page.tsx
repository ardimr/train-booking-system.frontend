"use client"
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm'
import React from 'react'
import styles from './page.module.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
const page = () => {
  return (
    <div className={styles.container}>
        <QueryClientProvider client={queryClient}>
          <RegistrationForm />
        </QueryClientProvider>
    </div>
  )
}

export default page