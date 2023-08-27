"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import SeatRow from './SeatRow'
import SeatColumn from './SeatHeader'
import { AvailableSeatsData, PassengerData, PassengerSeat, RowElement, WagonSelector, availableSeats, initialPassengerSeats, passengers, seatRows } from './data'
import SeatHeader from './SeatHeader'
import Passenger from './Passenger'
import SeatLegends from './SeatLegends'
import Wagons from './Wagons'
import PrimaryButton from '../Button/primary_button'
import SeatsLayout from './SeatsLayout'
import { useAvailableSeats } from '@/hooks/useAvailableSeats'



// const wagons:WagonSelector[] = [
//   {
//     wagon_class: "EKS",
//     wagon_number: 1,
//   },
//   {
//     wagon_class: "EKS",
//     wagon_number: 2,
//   },
//   {
//     wagon_class: "EKS",
//     wagon_number: 3,
//   }
// ]

const SeatSelections = () => {
  // console.log(availableSeats)
  const {isLoading, data} = useAvailableSeats(1, "EKS")
  const wagons:WagonSelector[] = data?.map((data:any) => {return {"wagon_class": data.wagon_class, "wagon_number": data.wagon_number}})

  const [passengerSeats, setpassengerSeats] = useState<PassengerSeat[]>(initialPassengerSeats)
  const [activePassenger, setActivePassenger] = useState<number>(1)
  const [activeWagon, setActiveWagon] = useState<WagonSelector>(isLoading? {wagon_class:"Loading", wagon_number:1}: wagons[0])


  const handleSelectSeat = (seat: RowElement, activePassenger:number) => {
    setpassengerSeats(
      passengerSeats.map((passengerSeat) => 
      passengerSeat.passengerNumber === activePassenger
        ? {...passengerSeat, seat:seat }
        : {...passengerSeat}
      )
    )
  }

  const handleActivePassenger = (passengerNumber: number) => {
    setActivePassenger(passengerNumber)
  }

  const handleActiveWagon = (wagon:WagonSelector) => {
    setActiveWagon(wagon)
  }

  const handleOnDone = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(passengerSeats)
  }

  const layoutIndex:number = data?.findIndex((wagon:any) => {return wagon.wagon_number === activeWagon?.wagon_number})

  return (
    <div className={styles["seats-selection"]}>
      <div className={styles["travel-info-wrapper"]}>
        <div className={styles["travel-info-top"]}>Tegal (Tegal) → Bandung (Bandung)</div>
        <div className={styles["travel-info-bottom"]}>Ciremai (144) Executive | Sun, 20 Ags 2023 00:35</div>
      </div>
      <div className={styles["passengers-seats-wrapper"]}>
        <div className={styles["passengers-container"]}>
          {passengerSeats.map((passengerSeat,index) => (
            <Passenger key={index} passengerSeat={passengerSeat} passengerNumber={index+1} activePassenger={activePassenger} handleActivePassenger={handleActivePassenger}/>
          ))}
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
            
            {isLoading
              ?
                <div className={styles["seats-container"]}>
                  <SeatLegends/>
                  {/* <Wagons wagons={wagons} activeWagon={activeWagon} handleActiveWagon={handleActiveWagon} /> */}
                  {/* <SeatsLayout seatRows={data[0].seting_rows} passengerSeats={passengerSeats} activePassenger={activePassenger} handleSelectSeat={handleSelectSeat} /> */}
                </div>
              : (
                <div className={styles["seats-container"]}>
                  <SeatLegends/>
                  <Wagons wagons={wagons} activeWagon={activeWagon} handleActiveWagon={handleActiveWagon} />
                  <SeatsLayout seatRows={data[layoutIndex]!.seting_rows} passengerSeats={passengerSeats} activePassenger={activePassenger} handleSelectSeat={handleSelectSeat} />
                </div>
              )
            } 
          <div className={styles["button"]}>
            <PrimaryButton disabled={false} onClick={handleOnDone}  > Done </PrimaryButton>
          </div>
        </div>
      </div>

    </div>
    
    
  )
}

export default SeatSelections

