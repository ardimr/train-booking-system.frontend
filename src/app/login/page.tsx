"use client"

import LoginForm from '@/components/LoginForm/LoginForm'
import React from 'react'
import styles from './page.module.css'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
const page = () => {
  return (
    
    <div className={styles.container}>
        <QueryClientProvider client={queryClient}>
          <LoginForm />
        </QueryClientProvider>
        
    </div>
  )
}

export default page