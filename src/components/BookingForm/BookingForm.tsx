"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import Input from './Input'
import CountryCode from '../CountryCode/CountryCode'
import { CountryCodeModel } from '../CountryCode/CountryCode'
import { useForm, SubmitHandler, Controller } from "react-hook-form"


interface IFormInput {
    fullName : string
    email : string
    countryCode: CountryCodeModel
    phoneNumber : string
    passengers : Passenger[]
}

type Passenger = {
    fullName: string
    identity: {
        type: string
        number: string
    }
}

const options: CountryCodeModel[] = [
    {dialCode : "+62", label: "Indonesia (+62)", flagCode: "ID"},
    {dialCode : "+1", label: "USA (+1)", flagCode: "US"},
    {dialCode : "+44", label: "UK (+44)", flagCode: "GB"},
    {dialCode : "+90", label: "Turkey (+90)", flagCode: "TR"},
    {dialCode : "+49", label: "Germany (+49)", flagCode: "DE"},
    {dialCode : "+81", label: "Japan (+81)", flagCode: "JP"},
    {dialCode : "+966", label: "Indonesia (+62)", flagCode: "SA"},
    
]

const passengers:Passenger[] = new Array(3).fill({})


const BookingForm = () => {
    const [countryCode, setCountryCode] = useState<CountryCodeModel>({flagCode: "ID", label: "Indonesia (+62)", dialCode:"+62"})
    const {register, handleSubmit, getValues, setValue} = useForm<IFormInput>({
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            countryCode: {
                dialCode: "+62",
                flagCode: "ID",
                label: "Indonesia (+62)"
            },
            passengers: []
        }
    })

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
        // console.log(getValues("countryCode"))
    }


    const handleCountryCodeChange = (countryCode:CountryCodeModel) => {
        setCountryCode(countryCode)
        setValue("countryCode", countryCode)
    }

    
    return (
    <div className={styles.bookingForm}>
        <h1>Contact Details</h1>
        <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.contactDetails} >
                <div className={styles.fullName}>
                    <div style={{padding: "5px 0"}}>
                        Full Name
                    </div>
                    <Input 
                        type='text' 
                        placeholder='Enter your full name' 
                        label='fullName'
                        name='fullName'
                        register={register}
                    />
                    
                </div>
                
                <div className={styles.phone}>
                    <div className={styles.countryCode}>
                        <div style={{padding: "5px 0"}}>
                            Country Code
                        </div>
                        <CountryCode
                            options={options}
                            value={countryCode}
                            onSelect={handleCountryCodeChange} 
                        />
                    </div>
                    <div className={styles.phoneNumber}>
                        <div style={{padding: "5px 0"}}>
                            Phone Number
                        </div>
                        <Input
                            register={register} 
                            type='text' 
                            placeholder='8123456789' 
                            label='phoneNumber'
                            name='phoneNumber'
                        />
                    </div>
                    
                </div>
                <div className={styles.email}>
                    <div style={{padding: "5px 0"}}>
                        Email
                    </div>
                    <Input
                        register={register}
                        type='text' 
                        placeholder='Enter your email' 
                        label='email'
                        name='email'
                    />
                </div>
            </div>
            
            {passengers.length>0 && <h1>Passengers</h1>}
            {

                passengers.map((passenger, index) => (
                <div className={styles.passengerDetails} key={index}>
                    <h2>Passenger {index+1}</h2>
                    <div className={styles.fullName}>
                        <div style={{padding: "5px 0"}}>
                            Full Name
                        </div>
                        <Input 
                            type='text' 
                            placeholder='Enter your full name' 
                            label={`passengers.${index}.fullName`}
                            name= {`passengers.${index}.fullName`}
                            register={register}
                        />
                    </div>
                    <div className={styles.identityNumber}>
                        <div style={{padding: "5px 0"}}>
                            Identity Number
                        </div>
                        <Input 
                            type='text' 
                            placeholder='Enter your full name' 
                            label={`passengers.${index}.identity.number`}
                            name= {`passengers.${index}.identity.number`}
                            register={register}
                        />
                    </div>
                </div>
                )

                )
            }
            <button type='submit' className={styles.submitButton}> Submit </button>
        </form>
        
        
    </div>
    
  )
}

export default BookingForm