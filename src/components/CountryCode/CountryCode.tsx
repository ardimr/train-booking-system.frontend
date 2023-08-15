import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import { useOnClickOutside } from "usehooks-ts"
import {BiChevronDown} from 'react-icons/bi'
import ReactCountryFlag from "react-country-flag"

export type CountryCodeModel = {
  dialCode: string,
  flagCode: string,
  label: string
}

interface props {
  value : CountryCodeModel,
  options : CountryCodeModel[],
  onSelect: (countryCode: CountryCodeModel) => void
}

const CountryCode = (
  {options, value, onSelect}: props) => {
  // const [countryCode, setCountryCode] = useState<CountryCodeModel>({flagCode: "ID", label: "Indonesia (+62)", value:"+62"})
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef(null)
  
  const handleInputClick = () => {
    console.log("Clicked")
    setShowMenu(!showMenu)
  }

  const handleItemClick = (option:CountryCodeModel) => {
    onSelect(option)
    setShowMenu(false)
  }

  const handleClickOutside = () => {
    if (showMenu) {
      setShowMenu(false)
    }
  }
  
  useOnClickOutside(ref, handleClickOutside)
  

  return (
    <div ref = {ref} className={styles.dropdownContainer}>
      <div onClick={handleInputClick} className={styles.dropdownInput}>
        <div style={{position:"relative", display:"flex", width:"100%", height:"100%", alignItems:"center"}}>
          <ReactCountryFlag className={styles.countryFlag} countryCode={value.flagCode} svg />
          <div>
            {value.dialCode}
          </div>
          <BiChevronDown className={styles.dropdownIcon}/>
        </div>
      </div>
      {showMenu && 
        (
          <div className={styles.dropdownMenu}>
            {options.map((option, index) => {
              return (
                <div className={styles.dropdownItem} key={index} onClick={()=> handleItemClick(option)}>
                  {option.label}
                </div>
              )
            } 
            )}
          </div>  
        )
      }
    </div>
  )
}

export default CountryCode