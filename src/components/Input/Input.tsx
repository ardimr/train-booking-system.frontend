import React from 'react'
import styles from './styles.module.css'
import { UseFormRegister, FieldValues  } from "react-hook-form"

interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    name: string
    placeholder: string
    // error: boolean
    disabled?: boolean,
    register?: any
  }
const Input: React.FC<InputProps> = (
    { type, label, name, placeholder, disabled, register} : InputProps
) => {
  return (
    <input className={styles["input"]}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        id={label}
        name={name}
        disabled={disabled}
        autoComplete= "off"
    />       
  )
}

export default Input