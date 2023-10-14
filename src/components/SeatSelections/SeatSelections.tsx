"use client"
import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import SeatRow from './SeatRow'
import SeatColumn from './SeatHeader'
import { AvailableSeatsData, PassengerSeat, RowElement, WagonSelector, availableSeats, passengers, seatRows } from './data'
import SeatHeader from './SeatHeader'
import Passenger from './Passenger'
import SeatLegends from './SeatLegends'
import Wagons from './Wagons'
import PrimaryButton from '../Button/PrimaryButton'
import SeatsLayout from './SeatsLayout'
import { useAvailableSeats } from '@/hooks/useAvailableSeats'
import { useSearchParams } from 'next/navigation'
import { useTravelById } from '@/hooks/useTravels'
import { TravelInfo } from '@/models/travel'
import dayjs from 'dayjs'
import { PassengerData } from '@/models/passenger'
import { useOnClickOutside } from 'usehooks-ts'

interface Props {
  onChange: (...event: any[]) => void
  passengerData: PassengerData[]
  handleClickOutside: () => void
}

const SeatSelections = (
  { onChange, passengerData, handleClickOutside }: Props
) => {
  const params = useSearchParams()
  const travelId = params.get("travel-id")
  const wagonClass = params.get("wagon-class")
  const { isLoading, data, isError } = useAvailableSeats(travelId ? +travelId : 0, wagonClass ? wagonClass : 'EKS')

  const wagons: WagonSelector[] = data?.map((data: any) => { return { "wagon_class": data.wagon_class, "wagon_number": data.wagon_number } })

  const initialPassengerSeats: PassengerData[] = passengerData.map((data, index) => {
    return {
      ...data,
      passengerNumber: index + 1,

    }
  })

  const [passengerSeats, setpassengerSeats] = useState<PassengerData[]>(initialPassengerSeats)
  const [activePassenger, setActivePassenger] = useState<number>(1)

  // console.log(passengerSeats)
  const { data: dataTravelInfo, isLoading: isLoadingTravelInfo } = useTravelById(travelId ? +travelId : 0, "EKS")

  const intitalActiveWagon = (): WagonSelector => {
    if (isLoading || data == undefined) {
      return {
        wagon_class: "Loading",
        wagon_number: 1
      }
    } else {
      return wagons[0]
    }
  }
  const [activeWagon, setActiveWagon] = useState<WagonSelector>(intitalActiveWagon)


  const handleSelectSeat = (seat: RowElement, activePassenger: number) => {
    setpassengerSeats(
      passengerSeats.map((passengerSeat) =>
        passengerSeat.passengerNumber === activePassenger
          ? { ...passengerSeat, seat: { seatId: seat.seat_id, seatLabel: seat.seat_label } }
          : { ...passengerSeat }
      )
    )
  }

  const handleActivePassenger = (passengerNumber: number) => {
    setActivePassenger(passengerNumber)
  }

  const handleActiveWagon = (wagon: WagonSelector) => {
    setActiveWagon(wagon)
  }

  const handleOnDone = (event: React.MouseEvent<HTMLButtonElement>) => {

    onChange(passengerSeats)
    handleClickOutside()
    // console.log(passengerSeats)
  }

  const travelInfo: TravelInfo = {

    travelId: dataTravelInfo?.travel_id,
    travelCode: dataTravelInfo?.travel_code,
    wagonClass: dataTravelInfo?.wagon_class.wagon_class_name,
    departureSchedule: dayjs(dataTravelInfo?.departure_schedule),
    departureStation: {
      name: dataTravelInfo?.departure_station.name,
      code: dataTravelInfo?.departure_station.code,
      cityCode: dataTravelInfo?.departure_station.city_code,
    },
    destinationStation: {
      name: dataTravelInfo?.destination_station.name,
      code: dataTravelInfo?.destination_station.code,
      cityCode: dataTravelInfo?.destination_station.city_code,
    },
    trainName: dataTravelInfo?.train_name

  }

  const layoutIndex: number = data?.findIndex((wagon: any) => { return wagon.wagon_number === activeWagon?.wagon_number })

  const ref = useRef(null)
  useOnClickOutside(ref, handleClickOutside)
  return (
    <div className={styles["dialog-wrapper"]}>
      <div className={styles["dialog-overlay"]} />
      <div ref={ref} className={styles["seats-selection"]}>
        <div className={styles["travel-info-wrapper"]}>
          {isLoadingTravelInfo
            ? (
              <div>Loading..</div>
            )
            : <>
              <div className={styles["travel-info-top"]}>{travelInfo.departureStation.name} ({travelInfo.departureStation.cityCode}) → {travelInfo.destinationStation.name} ({travelInfo.destinationStation.cityCode})</div>
              <div className={styles["travel-info-bottom"]}>{travelInfo.trainName} ({travelInfo.travelCode}) {travelInfo.wagonClass} | {travelInfo.departureSchedule.format('ddd, DD MMM YYYY HH:mm')}</div>
            </>
          }

        </div>
        <div className={styles["passengers-seats-wrapper"]}>
          <div className={styles["passengers-container"]}>
            {passengerSeats.map((passengerSeat, index) => (
              <Passenger key={index} passengerSeat={passengerSeat} passengerNumber={index + 1} activePassenger={activePassenger} handleActivePassenger={handleActivePassenger} />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>

            {isLoading
              ?
              <div className={styles["seats-container"]}>
                <SeatLegends />
                <div style={{ alignSelf: "center" }}> Loading ... </div>
              </div>
              : isError || data === undefined || data === null
                ?
                <div className={styles["seats-container"]}>
                  <div style={{ alignSelf: "center" }}>Failed to load data</div>
                </div>
                : (
                  <div className={styles["seats-container"]}>
                    <SeatLegends />
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
    </div>


  )
}

export default SeatSelections

