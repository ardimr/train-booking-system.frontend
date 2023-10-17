import React from 'react'
import Header from './Header'
import styles from './styles.module.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const queryClient = new QueryClient()
  return (
    <div className={styles['layout']}>
      <QueryClientProvider client={queryClient}>
        <Header/>
        <main> {children} </main>
      </QueryClientProvider>
    </div>
  )
}

export default RootLayout