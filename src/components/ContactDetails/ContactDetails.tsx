"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import Input from '../Input/Input'
import CountryCode from '../CountryCode/CountryCode'
import { CountryCodeModel } from '../CountryCode/CountryCode'
const ContactDetails = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [countryCode, setCountryCode] = useState<CountryCodeModel>({flagCode: "ID", label: "Indonesia (+62)", dialCode:"+62"})
    
    const options: CountryCodeModel[] = [
      {dialCode : "+62", label: "Indonesia (+62)", flagCode: "ID"},
      {dialCode : "+1", label: "USA (+1)", flagCode: "US"},
      {dialCode : "+44", label: "UK (+44)", flagCode: "GB"},
      {dialCode : "+90", label: "Turkey (+90)", flagCode: "TR"},
      {dialCode : "+49", label: "Germany (+49)", flagCode: "DE"},
      {dialCode : "+81", label: "Japan (+81)", flagCode: "JP"},
      {dialCode : "+966", label: "Indonesia (+62)", flagCode: "SA"},
      
    ]
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value)
    }

    const handleCountryCodeChange = (countryCode:CountryCodeModel) => {
        setCountryCode(countryCode)
    }

    return (
    <div className={styles.contactDetails}>
        <div className={styles.fullName}>
            <div style={{padding: "5px 0"}}>
                Full Name
            </div>
            <Input 
                type='text' 
                placeholder='Enter your full name' 
                label='Full Name'
                name='Full Name'
                value={fullName}
                onChange={handleNameChange}
            />
        </div>
        
        <div className={styles.phone}>
            <div className={styles.countryCode}>
                <div style={{padding: "5px 0"}}>
                    Country Code
                </div>
                <CountryCode options={options} value={countryCode} onSelect={handleCountryCodeChange} />
            </div>
            <div className={styles.phoneNumber}>
                <div style={{padding: "5px 0"}}>
                    Phone Number
                </div>
                <Input 
                    type='text' 
                    placeholder='8123456789' 
                    label='phone number'
                    name='phone number'
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
            </div>
             
        </div>
        <div className={styles.email}>
            <div style={{padding: "5px 0"}}>
                Email
            </div>
            <Input 
                type='text' 
                placeholder='Enter your email' 
                label='email'
                name='email'
                value={email}
                onChange={handleEmailChange}
            />
        </div>
    </div>
  )
}

export default ContactDetails