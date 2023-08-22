"use client"

import React from 'react'
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form'
import styles from './styles.module.css'
import { DevTool } from "@hookform/devtools";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useRegistration, RegistrationData, registerUser } from '@/hooks/useRegister';

interface IFormInput {
    fullName : string
    username: string
    email: string
    password: string
    confirmPassword: string
}

const schema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  username: z.string().nonempty("Username is required"),
  email: z.string().nonempty("Email is required").email("Email format is not valid"),
  password: z.string().nonempty("Password can't be empty").min(6),
  confirmPassword: z.string().nonempty("Password can't be empty").min(6)
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Password don't match",
});
const RegistrationForm = () => {
  
  const {register, handleSubmit, formState, control,  getValues, setValue, reset} = useForm<IFormInput>(
    {
        defaultValues: {
            fullName: "",
            username:"",
            email: "",
            password: "",
            confirmPassword: ""
        },
        resolver: zodResolver(schema),
    }
  )

  const {errors, dirtyFields, touchedFields, isDirty, isValid, isSubmitSuccessful} = formState
  
  const {mutate: registerUser, isError} = useRegistration()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data)
    
    const registrationData: RegistrationData = {
      name : data.fullName,
      username: data.username,
      email: data.email,
      password: data.password,

    }
    registerUser(registrationData)
    
    if (isSubmitSuccessful) {
      reset()
    }
    
  }

  const onError = (errors: FieldErrors<IFormInput>) =>  {
    console.log("Form errors", errors)
  }

  return (
    <div>
      <form className={styles.registrationForm} onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <h2 className={styles.header}>Registration Form</h2>

        <label className={styles.label} htmlFor='fullName'> Full Name</label>
        <input className={styles.input} type='text' placeholder='Enter full name' {...register("fullName", {required: true})}/>
        <p className={styles.error}> {errors.fullName?.message}</p>
        
        <label className={styles.label} htmlFor='username'>Username</label>
        <input className={styles.input} type='text' placeholder='Enter username' {...register("username", {required: true})}/>
        <p className={styles.error} > {errors.username?.message}</p>

        <label className={styles.label} htmlFor='email'>Email</label>
        <input className={styles.input} type='email' placeholder='email@email.com' {...register("email", {required: true})}/>
        <p className={styles.error} > {errors.email?.message}</p>

        <label className={styles.label} htmlFor='password'>Password</label>
        <input className={styles.input} type='password' placeholder='Enter password' {...register("password", {required: true})}/>
        <p className={styles.error}> {errors.password?.message}</p>

        <label className={styles.label} htmlFor='password'>Password</label>
        <input className={styles.input} type='password' placeholder='Confirm password' {...register("confirmPassword", {required: true})}/>
        <p className={styles.error}> {errors.confirmPassword?.message}</p>

        {isError && <p className={styles.error}> Failed to register user</p>}

        <button className={styles.submitButton} style={{alignSelf:"center"}} type='submit' disabled={!isDirty || !isValid} > Register </button>
      </form>
      {/* <DevTool control={control} />  */}
    </div>
    
  )
}

export default RegistrationForm