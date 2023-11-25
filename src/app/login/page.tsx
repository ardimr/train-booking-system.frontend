"use client"

import LoginForm from '@/components/LoginForm/LoginForm'
import React from 'react'
import styles from './page.module.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import RootLayout from '@/components/Layout/Layout'

const queryClient = new QueryClient()
const page = () => {
  return (
    <RootLayout>
      <div className={styles.container}>
            <LoginForm />          
      </div>
    </RootLayout>
  )
}

export default page