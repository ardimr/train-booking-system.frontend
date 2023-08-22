"use client"

import LoginForm from '@/components/LoginForm/LoginForm'
import React from 'react'
import styles from './page.module.css'
import { QueryClientProvider, QueryClient } from 'react-query'

const page = () => {
  const queryClient = new QueryClient()
  return (
    
    <div className={styles.container}>
        <QueryClientProvider client={queryClient}>
          <LoginForm />
        </QueryClientProvider>
        
    </div>
  )
}

export default page