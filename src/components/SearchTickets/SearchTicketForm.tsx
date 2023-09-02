"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './styles.module.css'
import SearchStations from '../SearchStations/SearchStations'
import { QueryClient, QueryClientProvider, UseQueryResult } from 'react-query'
import CustomDatePicker from '../DatePicker/DatePicker'
import PrimaryButton from '../Button/PrimaryButton'
import dayjs, { Dayjs } from 'dayjs'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { UseFormRegister, FieldValues, Control, Controller, UseFormHandleSubmit, SubmitHandler } from 'react-hook-form'
import { SearchFormInput } from './SearchTickets'
import { FormControlLabel } from '@mui/material'

interface Props {
  control: Control<SearchFormInput, any>
  handleSubmit: UseFormHandleSubmit<SearchFormInput, undefined>
  onSubmit:  SubmitHandler<SearchFormInput>
}
const SearchTicketForm = ({
  control,
  handleSubmit,
  onSubmit
  }:Props) => {
  
  // const handleOnSearch = () => {
  //   console.log(departureStation, destinationStation, totalPassengers)
  // }

  return (
    <form className={styles.searchTickets} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.title}>
            Book and Buy Train Tickets
        </div>
        <div style={{width:'100%', height:'15px'}} />
        <div className={styles.SearchStationsContainer}>
              <div className={styles.originStationBox}>
                <div className={styles.stationTitle}>Departure</div>
                <Controller
                  control={control}
                  name="departureStation"
                  render={({field: {value, onChange}}) =>(
                    <SearchStations 
                      placeholder='Departure station'
                      selectedStation={value}
                      onChange={onChange}
                      name="departureStation"
                      key="departureStation"
                    />
                  ) }
                />
              </div>
              <div style={{width:'100px'}}>
                
              </div>
              <div className={styles.destinationStationBox}>
                <div className={styles.stationTitle}> Destination </div>
                <Controller
                  control={control}
                  name="destinationStation"
                  render={({field: {value, onChange}}) =>(
                    <SearchStations 
                      placeholder='Destination station'
                      selectedStation={value}
                      onChange={onChange}
                      name="destinationStation"
                      key="destinationStation"
                    />
                  ) }
                />
              </div>
        </div>
        <div style={{width:'100%', height:'15px'}} />
        <div className={styles.secondContainer}>
            <div className={styles.childContainer}>
                <div className={styles.departureDate} style={{padding:"10px 10px 10px 0px", alignSelf:"center"}}>
                  <div className={styles.stationTitle}>Date</div>
                  <Controller
                    control={control}
                    name='selectedDate'
                    render={({field: {value, onChange}}) => (
                      <CustomDatePicker  value={value} onChange={onChange}/>
                    )}
                  />
                  {/* <DatePicker /> */}
                </div>
                <div className={styles.departureDate} style={{padding:"10px 10px 10px 10px", alignSelf:"center"}}>
                  <div className={styles.stationTitle}>Passengers</div>
                  <Controller
                    control={control}
                    name='totalPassengers'
                    render={({field: {value, onChange}}) => (
                      <select 
                        placeholder='1-4 People' 
                        style={{
                          height:"40px", 
                          width:"100px", 
                          padding:"8px 10px",
                          background: "white",
                          borderRadius: "5px",
                          border: "1px solid #C5C5C5",
                        }}
                        name='totalPassengers'
                        value={value}
                        onChange={(e) => onChange(+e.target.value)}
                      > 
                        <option key= {1} value={1}>1</option>
                        <option key= {2} value={2}>2</option>
                        <option key= {3} value={3}>3</option>
                        <option key= {4} value={4}>4</option>
                      </select>

                    )}
                  />
                </div>
                
            </div>
            <div style={{width:'50px'}}></div>
            <div className={styles.childContainer} style={{justifyContent:"flex-end"}}>
                <div className={styles.departureDate} />
                
                <div className={styles.searchButton} >
                    <PrimaryButton type='submit' disabled= {false} children='Search Trains'/>
                </div>              
            </div>
        </div>
        
    </form>
  )
}

export default SearchTicketForm
