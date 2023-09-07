import React from 'react'
import Header from './Header'
import styles from './styles.module.css'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles['layout']}>
      <Header/>
      <main> {children} </main>
    </div>
  )
}

export default RootLayout