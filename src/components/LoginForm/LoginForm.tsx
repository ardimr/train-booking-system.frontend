"use client"
import React from 'react'
import styles from './styles.module.css'
import Input from '../Input/Input'
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useLogin, loginUser, LoginData } from '@/hooks/useLogin'

interface IFormInput {
  username: string
  password: string
}

const schema = z.object({
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password can't be empty").min(6),
})

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
 
  const {mutate:loginUser, isError, data} = useLogin()
  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    console.log(formData)
    
    // Login
    const loginData: LoginData = {
      username: formData.username,
      password: formData.password
    }

    loginUser(loginData)

    console.log(data?.data)

    if (isSubmitSuccessful) {
      reset()
    }
  }

  

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className={styles.header}>Login</h2>
        
        <label className={styles.label} htmlFor='username'>Username</label>
        <input  className={styles.input} type='text' placeholder='Enter username' {...register("username", {required: true})}/>
        
        <label className={styles.label} htmlFor='password'>Password</label>
        <input className={styles["input"]}  type='password' placeholder='Enter password' {...register("password", {required: true})}/>
        
        <button className={styles.submitButton} type='submit' disabled={!isDirty || !isValid}> Login </button>
    </form>
  )
}

export default LoginForm