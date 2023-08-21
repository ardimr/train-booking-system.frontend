"use client"
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm'
import React from 'react'
import styles from './page.module.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const page = () => {
  const queryQlient = new QueryClient()
  return (
    <div className={styles.container}>
        <QueryClientProvider client={queryQlient}>
          <RegistrationForm />
        </QueryClientProvider>
        
    </div>
  )
}

export default page