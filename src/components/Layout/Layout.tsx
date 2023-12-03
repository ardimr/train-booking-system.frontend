import React from 'react'
import Header from './Header'
import styles from './styles.module.css'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { AxiosError, isAxiosError } from 'axios'
import { error } from 'console'

const handleError = (error:unknown) => {
  if (!isAxiosError(error)) {
    return "Unknown error";
  }
  if (error instanceof Error && 'response' in error) {
    const response = error.response!
    if (response.status === 401) {
      console.error('Unauthorized error:', error);
      // Handle unauthorized error, e.g., redirect to a login page
      window.location.href = '/login';
    } else if (response.status === 404) {
      console.error('Not found error:', error);
      // Handle not found error, e.g., display an error message
      alert('The requested resource was not found.');
    } else {
      console.error('An error occurred:', error);
      // Handle other errors, e.g., display a generic error message
    }
  } else {
    console.error('An error occurred:', error);
  }
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleError
  })

})

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles['layout']}>
      <QueryClientProvider client={queryClient}>
        <header style={{zIndex:"1", position:"sticky",top:"0", width:"100%"}}>
          <Header />
        </header>
        <main style={{zIndex:"0"}}> {children} </main>
        <footer/>
      </QueryClientProvider>
    </div>
  )
}

export default RootLayout