"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import Input from '../Input/Input'

const ContactDetails = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [countryCode, setCountryCode] = useState("")
    
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value)
    }

    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountryCode(e.target.value)
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
                <Input 
                    type='text' 
                    placeholder='+62' 
                    label='country code'
                    name='country code'
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                />
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