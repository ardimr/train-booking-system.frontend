"use client"
import React from 'react'
import styles from './styles.module.css'
import Input from '../Input/Input'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  username: string
  password: string
}
const LoginForm = () => {
  const {register, handleSubmit, formState, getValues, setValue} = useForm<IFormInput>(
    {
        defaultValues: {
            username: "",
            password: "",
        }
    }
  )
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='username'>Username</label>
        <input className={styles.input} type='text' placeholder='Enter username' {...register("username", {required: true})}/>
        
        <label htmlFor='password'>Password</label>
        <input className={styles.input}  type='password' placeholder='Enter password' {...register("password", {required: true})}/>
        
        <button type='submit' style={{width:"50px", height:"20px", marginTop:"10px", alignSelf:"center"}}> Login </button>
    </form>
  )
}

export default LoginForm