"use client"
import React from 'react'
import styles from './styles.module.css'
import Input from '../Input/Input'
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useLogin } from '@/hooks/useLogin'
import SecondaryButton from '../Button/SecondaryButton'
import InputPassword from '../Input/InputPassword'
import { LoginData } from '@/models/login'
import { error } from 'console'

export interface IFormInput {
  username: string
  password: string
}

const schema = z.object({
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password can't be empty").min(6),
})

const LoginForm = () => {
  const {register, handleSubmit, formState, getValues, setValue, reset, setError,} = useForm<IFormInput>(
    {
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: zodResolver(schema)
    }
  )
  const {errors, dirtyFields, touchedFields, isDirty, isValid, isSubmitSuccessful} = formState
 
  const {mutate:loginUser, isError, data, error, } = useLogin(reset)
  
  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    // console.log(formData)
    
    // Login
    const loginData: LoginData = {
      username: formData.username,
      password: formData.password
    }

    loginUser(loginData)

    // console.log(data?.data)

  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2 className={styles.header}>Login</h2>
        
        <label className={styles.label} htmlFor='username'>Username</label>
        <Input name='username' type='text' placeholder='Enter username' register={register} label='username'/>
        
        <label className={styles.label} htmlFor='password'>Password</label>
        <InputPassword name='password' label='password' placeholder='Enter password' register={register}/>
        
        {error?.message && <div className={styles["error"]} style={{alignSelf:"center", margin:"5px 0px 0px 0px"}}>{error.message}</div>}
        <SecondaryButton style={{marginTop:"15px", fontSize:"14px", color:"white"}} type='submit' disabled={!isDirty || !isValid}>Submit</SecondaryButton>

    </form>
  )
}

export default LoginForm