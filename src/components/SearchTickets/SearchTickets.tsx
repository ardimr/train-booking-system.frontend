"use client"

import React, { useState } from 'react'
import styles from './styles.module.css'
import SearchStations from '../SearchStations/SearchStations'
import { QueryClient, QueryClientProvider } from 'react-query'
import CustomDatePicker from '../DatePicker/DatePicker'
import PrimaryButton from '../Button/primary_button'
import { Dayjs } from 'dayjs'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
const SearchTickets = () => {
  const queryQlient = new QueryClient()
  const [date, setDate] = useState<Dayjs|null>(null)
  return (
    <div className={styles.searchTickets}>
        <div className={styles.title}>
            Book and Buy Train Tickets
        </div>
        <div style={{width:'100%', height:'15px'}} />
        <div className={styles.SearchStationsContainer}>
            <QueryClientProvider client={queryQlient}>
              <div className={styles.originStationBox}>
                <div className={styles.stationTitle}> Origin </div>
                <SearchStations placeholder='origin station' />
              </div>
              <div style={{width:'100px'}}>
                
              </div>
              <div className={styles.destinationStationBox}>
                <div className={styles.stationTitle}> Destination </div>
                <SearchStations placeholder='destination station' />
              </div>
            </QueryClientProvider>
        </div>
        <div style={{width:'100%', height:'15px'}} />
        <div className={styles.secondContainer}>
            <div className={styles.childContainer}>
                <div className={styles.departureDate} style={{padding:"10px 10px 10px 0px", alignSelf:"center"}}>
                  <div className={styles.stationTitle}>Date</div>
                  <CustomDatePicker setValue={setDate} value={date}/>
                  {/* <DatePicker /> */}
                </div>
                <div className={styles.departureDate} style={{padding:"10px 10px 10px 10px", alignSelf:"center"}}>
                  <div className={styles.stationTitle}>Passengers</div>
                  <select 
                    placeholder='1-4 People' 
                    style={{
                      height:"40px", 
                      width:"100px", 
                      padding:"8px 10px",
                      background: "white",
                      borderRadius: "5px",
                      border: "1px solid #C5C5C5",
                    }}> 
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </div>
                
            </div>
            <div style={{width:'50px'}}></div>
            <div className={styles.childContainer} style={{justifyContent:"flex-end"}}>
                <div className={styles.departureDate} />
                
                <div className={styles.searchButton} >
                    <PrimaryButton disabled= {false} children='Search Trains'/>
                </div>              
            </div>
        </div>
        
    </div>
  )
}

export default SearchTickets
