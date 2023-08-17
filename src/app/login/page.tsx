import LoginForm from '@/components/LoginForm/LoginForm'
import React from 'react'
import styles from './page.module.css'

const page = () => {
  return (
    <div className={styles.container}>
        <LoginForm />
    </div>
  )
}

export default page