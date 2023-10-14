"use client"
import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import Input from '../Input/Input'
import CountryCode from '../CountryCode/CountryCode'
import { CountryCodeModel } from '../CountryCode/CountryCode'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import PrimaryButton from '../Button/PrimaryButton'
import { useSearchParams } from 'next/navigation'
import { passengers } from '../SeatSelections/data'
import { PassengerData } from '@/models/passenger'
import SeatSelections from '../SeatSelections/SeatSelections'
import { NewBookingData } from '@/models/booking'
import { useNewBooking } from '@/hooks/useBooking'
import { createPortal } from 'react-dom'


interface IFormInput {
  fullName: string
  email: string
  countryCode: CountryCodeModel
  phoneNumber: string
  passengers: PassengerData[]
}



const options: CountryCodeModel[] = [
  { dialCode: "+62", label: "Indonesia (+62)", flagCode: "ID" },
  { dialCode: "+1", label: "USA (+1)", flagCode: "US" },
  { dialCode: "+44", label: "UK (+44)", flagCode: "GB" },
  { dialCode: "+90", label: "Turkey (+90)", flagCode: "TR" },
  { dialCode: "+49", label: "Germany (+49)", flagCode: "DE" },
  { dialCode: "+81", label: "Japan (+81)", flagCode: "JP" },
  { dialCode: "+966", label: "Indonesia (+62)", flagCode: "SA" },

]

const BookingForm = () => {
  const params = useSearchParams()
  const totalPassengers = params.get("total-passengers")
  const [showSeatSelection, setShowSeatSelection] = useState<boolean>(false)
  const [countryCode, setCountryCode] = useState<CountryCodeModel>({ flagCode: "ID", label: "Indonesia (+62)", dialCode: "+62" })
  const { register, handleSubmit, getValues, setValue, control, reset } = useForm<IFormInput>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      countryCode: {
        dialCode: "+62",
        flagCode: "ID",
        label: "Indonesia (+62)"
      },
      passengers: new Array(+totalPassengers!).fill({})
    }
  })

  const passengers = getValues().passengers
  const travelId = +params.get('travel-id')!

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const bookingData: NewBookingData = {
      travel_id: travelId,
      contact_details: {
        full_name: data.fullName,
        phone_number: {
          country_code: data.countryCode.dialCode,
          number: data.phoneNumber
        },
        email: data.email,
      },
      passenger_details: data.passengers.map((passenger) => {
        return {
          passenger_name: passenger.fullName,
          passenger_id_type: passenger.identity.type,
          passenger_id_number: passenger.identity.number,
          seat_id: passenger.seat.seatId
        }
      })
    }

    createNewBooking(bookingData)
    console.log(bookingData)
    // console.log(getValues("countryCode"))
  }

  const { error, mutate: createNewBooking } = useNewBooking(reset)

  const handleCountryCodeChange = (countryCode: CountryCodeModel) => {
    setCountryCode(countryCode)
    setValue("countryCode", countryCode)
  }


  const ref = useRef(null)
  const handleClickOutside = () => {
    if (showSeatSelection) {
      setShowSeatSelection(false)
    }
  }
  return (
    <div className={styles.bookingForm}>
      <h1>Contact Details</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contactDetails} >
          <div className={styles.fullName}>
            <div className={styles["label"]}>
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
              <div className={styles["label"]}>
                Country Code
              </div>
              <CountryCode
                options={options}
                value={countryCode}
                onSelect={handleCountryCodeChange}
              />
            </div>
            <div className={styles.phoneNumber}>
              <div className={styles["label"]}>
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
            <div className={styles["label"]}>
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

        {passengers.length > 0 && <h1>Passenger Details</h1>}
        {
          passengers.map((passenger, index) => (
            <div className={styles.passengerDetails} key={index}>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <h2 style={{ marginTop: "5px", marginBottom: "5px" }}>Passenger {index + 1}</h2>
                <div style={{ alignSelf: "center", borderRadius: "5px", background: "orange", fontSize: "small", padding: "5px", color: "white" }}>
                  {passenger.seat ? passenger.seat.seatLabel : "No Seat"}
                </div>
              </div>
              <div className={styles.fullName}>
                <div className={styles["label"]}>
                  Full Name
                </div>
                <Input
                  type='text'
                  placeholder='Enter your full name'
                  label={`passengers.${index}.fullName`}
                  name={`passengers.${index}.fullName`}
                  register={register}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <div className={styles["identity-type"]}>
                  <div className={styles["label"]}>
                    Identity Type
                  </div>
                  <select className={styles["identity-type-dropdown"]}>
                    <option value={"KTP"}>KTP</option>
                    <option value={"Passport"}>Passport</option>
                  </select>
                </div>
                <div className={styles["identity-number"]}>
                  <div className={styles["label"]}>
                    Identity Number
                  </div>
                  <Input
                    type='text'
                    placeholder='Enter your identity number'
                    label={`passengers.${index}.identity.number`}
                    name={`passengers.${index}.identity.number`}
                    register={register}
                  />
                </div>
              </div>
            </div>
          )
          )
        }
        {
          showSeatSelection
          &&
          createPortal(
            <Controller
              control={control}
              name='passengers'
              render={({ field: { value, onChange } }) => (
                <SeatSelections passengerData={value} onChange={onChange} handleClickOutside={handleClickOutside} />
              )}
            />, document.body
          )
        }
        <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around" }}>
          <PrimaryButton type='button' style={{ width: "300px", alignSelf: "center" }} onClick={() => { setShowSeatSelection(true) }}>Select Seats</PrimaryButton>
          <PrimaryButton type='submit' style={{ width: "300px", alignSelf: "center" }}>Submit</PrimaryButton>
        </div>
      </form>


    </div>

  )
}

export default BookingForm