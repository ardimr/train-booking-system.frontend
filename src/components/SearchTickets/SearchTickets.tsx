"use client"

import React from 'react'
import styles from './styles.module.css'
import SearchStations from '../SearchStations/SearchStations'
import { QueryClient, QueryClientProvider } from 'react-query'
import CustomDatePicker from '../DatePicker/DatePicker'
import PrimaryButton from '../Button/primary_button'

const SearchTickets = () => {
const queryQlient = new QueryClient()
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
                <SearchStations />
              </div>
              <div style={{width:'100px'}}>
                
              </div>
              <div className={styles.destinationStationBox}>
                <div className={styles.stationTitle}> Destination </div>
                <SearchStations />
              </div>
            </QueryClientProvider>
        </div>
        <div style={{width:'100%', height:'15px'}} />
        <div className={styles.secondContainer}>
            <div className={styles.childContainer}>
                <div className={styles.departureDate} />
            </div>
            <div style={{width:'50px'}}></div>
            <div className={styles.childContainer}>
                <div className={styles.departureDate} />
                <div className={styles.searchButton}>
                    <PrimaryButton disabled= {false} children='Search Trains'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SearchTickets
