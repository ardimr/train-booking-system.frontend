"use client"
import React from 'react'
import styles from './styles.module.css'
import Input from '../Input/Input'
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import useSWR from 'swr'
import { useMutation } from 'react-query'
import { json } from 'stream/consumers'

interface IFormInput {
  username: string
  password: string
}
interface ILoginResponse {
  
}
const schema = z.object({
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password can't be empty").min(6),
})

const loginFetcher = async (formData: IFormInput) => {
  const  credentials = btoa(`${formData.username}:${formData.password}`);
  const res = await fetch(
    `http://localhost:8080/api/auth/signin`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`,
      },
    }
  )
  return res.json()
}

const useLogin = (loginData:IFormInput) => {
  // const { data, error } = useSWR(`http://localhost:8080/api/auth/signin`, (url) => loginFetcher(url, loginData))
  // const {login} = useMutation(loginFetcher)
  // return {data, error}
}

const LoginForm = () => {
  const {register, handleSubmit, formState, getValues, setValue, reset} = useForm<IFormInput>(
    {
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: zodResolver(schema)
    }
  )
  const {errors, dirtyFields, touchedFields, isDirty, isValid, isSubmitSuccessful} = formState
  // const mutation = useMutation({mutationFn: loginFetcher})
 
  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    console.log(formData)
    
    // Login
    const data = await loginFetcher(formData)
    console.log(data)
    if (isSubmitSuccessful) {
      reset()
    }
  }

  

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className={styles.header}>Login</h2>
        
        <label className={styles.label} htmlFor='username'>Username</label>
        <input className={styles.input} type='text' placeholder='Enter username' {...register("username", {required: true})}/>
        
        <label className={styles.label} htmlFor='password'>Password</label>
        <input className={styles.input}  type='password' placeholder='Enter password' {...register("password", {required: true})}/>
        
        <button className={styles.submitButton} type='submit' disabled={!isDirty || !isValid}> Login </button>
    </form>
  )
}

export default LoginForm