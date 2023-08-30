import React, { useState } from 'react'
import styles from './styles.module.css'
import { UseFormRegister, FieldValues  } from "react-hook-form"
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
interface InputProps {
    label: string
    name: string
    placeholder: string
    // error: boolean
    disabled?: boolean,
    register: UseFormRegister<any>
  }
const InputPassword: React.FC<InputProps> = (
    { label, name, placeholder, disabled, register} : InputProps
) => {

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
  
  const onClickHandler = (e:React.MouseEvent<SVGAElement>) => {
    setIsShowPassword(!isShowPassword)
  }
  return (
    <div className={styles["input-password-wrapper"]}>
      <input className={styles["input-password"]}
        {...register(name)}
        type={isShowPassword? "text": "password"}
        placeholder={placeholder}
        id={label}
        name={name}
        disabled={disabled}
        autoComplete= "off"
      />
      {isShowPassword
        ? <AiOutlineEye fontSize={14} className={styles["password-icon"]} onClick={onClickHandler}/>
        : <AiOutlineEyeInvisible fontSize={14} className={styles["password-icon"]} onClick={onClickHandler} /> 
      }
      
    </div>
          
  )
}

export default InputPassword