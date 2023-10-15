"use client"

import React from 'react'
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form'
import styles from './styles.module.css'
import { DevTool } from "@hookform/devtools";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useRegistration } from '@/hooks/useRegister';
import InputPassword from '../Input/InputPassword';
import Input from '../Input/Input';
import { RegistrationData } from '@/models/registration';

export interface IFormInput {
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
  
  const {mutate: registerUser, isError, error, isSuccess} = useRegistration(reset)

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data)
    
    const registrationData: RegistrationData = {
      fullname : data.fullName,
      username: data.username,
      email: data.email,
      password: data.password,

    }

    registerUser(registrationData)
    
    if (isSubmitSuccessful && isSuccess) {
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
        <Input  name="fullName" label="fullName"  type='text' placeholder='Enter full name' register={register}/>
        <p className={styles.error}> {errors.fullName?.message}</p>
        
        <label className={styles.label} htmlFor='username'>Username</label>
        <Input  name="username" label="username"  type='text' placeholder='Enter username' register={register}/>
        <p className={styles.error} > {errors.username?.message}</p>

        <label className={styles.label} htmlFor='email'>Email</label>
        <Input  name="email" label="email"  type='email' placeholder='john.doe@mail.com' register={register}/>
        <p className={styles.error} > {errors.email?.message}</p>

        <label className={styles.label} htmlFor='password'>Password</label>
        <InputPassword name='password' label='password' placeholder='Enter password' register={register}/>
        <p className={styles.error}> {errors.password?.message}</p>

        <label className={styles.label} htmlFor='password'>Password</label>
        <InputPassword name='confirmPassword' label='confirmPassword' placeholder='Confirm password' register={register}/>
        <p className={styles.error}> {errors.confirmPassword?.message}</p>

        {error && <p className={styles.error}>{error.message}</p>}

        <button className={styles.submitButton} style={{alignSelf:"center"}} type='submit' disabled={!isDirty} > Register </button>
      </form>
      {/* <DevTool control={control} />  */}
    </div>
    
  )
}

export default RegistrationForm