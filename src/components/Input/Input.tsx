import React from 'react'
import styles from './styles.module.css'
interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    name: string
    placeholder: string
    // error: boolean
    disabled?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
const Input: React.FC<InputProps> = (
    { type, label, name, placeholder, disabled, onChange} : InputProps
) => {
  return (
    <div className={styles.inputContainer}>
        <input className={styles.inputInner}
            type={type}
            placeholder={placeholder}
            id={label}
            name={name}
            onChange={onChange}
            disabled={disabled}
            autoComplete= "off"
        />
            
    </div>
  )
}

export default Input