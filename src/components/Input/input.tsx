import React from 'react'
import styles from './style.module.css'
interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
  label: string
  value: string | number
  name: string
  placeholder: string
  // error: boolean
  disabled?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setShowSuggestions : React.Dispatch<React.SetStateAction<boolean>>
}

const Input: React.FC<InputProps> = (
  { value , type, label, name, placeholder, disabled, onChange, setShowSuggestions} : InputProps
) => {
  
  const handleOnActive = () => {
    setShowSuggestions(true)
  }
  return (
      <input
        className={styles.searchInput}
        onFocus={handleOnActive}
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        autoComplete='off'
      />  
  )
}

export default Input