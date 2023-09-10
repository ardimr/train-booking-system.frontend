import React from 'react'
import styles from './styles.module.css'
import { BsArrowRightCircle } from 'react-icons/bs'
import { Divider } from '@mui/material'
import { LiaTrainSolid } from 'react-icons/lia'
import { useSearchParams } from 'next/navigation'
import { useTravelById } from '@/hooks/useTravels'
import dayjs from 'dayjs'
import { IDR } from '@/utils/currency'

const TravelInfo = () => {
  const params = useSearchParams()
  const totalPassengers = params.get("total-passengers")
  const travelId = params.get("travel-id") ? +params.get("travel-id")! : 0
  const wagonClass = params.get("wagon-class") ? params.get("wagon-class")! : ""

  const { data, isLoading, isError } = useTravelById(travelId, wagonClass)
  const departureDate = dayjs(data?.departure_schedule)
  const arrivalDate = dayjs(data?.arrival_schedule)
  


  const serviceFee: number = 5000
  const fareAmount:number = +totalPassengers! * data?.fare.amount
  const totalFare:number = fareAmount + serviceFee
  return (
    <div className={styles['travel-info-card']}>
      {isError
        ? <div>Failed to fetch data</div>
        : <>
          <div className={styles['subheader']}>
            Departure Train
          </div>
          <div className={styles['container-main']}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <LiaTrainSolid fontSize={28} />
              <div style={{ display: "flex", flexDirection: "column", paddingLeft: "5px" }}>
                <div style={{ fontSize: "14px", fontWeight: "bold" }}>{data?.departure_station.name}</div>
                <div style={{ fontSize: "12px" }}>{data?.wagon_class.wagon_class_name}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <LuCalendarDays fontSize={28}/> */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "5px", fontSize: "14px" }}>
                <div style={{ alignSelf: "flex-end", fontWeight: "bolder" }}>{departureDate.format('dddd')}</div>
                <div>{departureDate.format('DD MMM YYYY')}</div>
              </div>
            </div>

          </div>
          <div className={styles['container-main']}>
            <div className={styles['container-cross']}>
              <div>
                {departureDate.format('HH:mm')}
              </div>
              <div style={{ fontSize: "12px" }}>
                {data?.departure_station.name} ({data?.departure_station.code})
              </div>
            </div>
            <div className={styles['container-cross']}>
              <BsArrowRightCircle style={{ alignSelf: "center" }} />
              <div style={{ fontSize: "12px" }}>
                {data?.duration.hour}j{data?.duration.minute}m
              </div>
            </div>
            <div className={styles['container-cross']}>
              <div style={{ alignSelf: "flex-end" }}>
                {arrivalDate.format('HH:mm')}
              </div>
              <div style={{ fontSize: "12px" }}>
                {data?.destination_station.name} ({data?.destination_station.code})
              </div>
            </div>
          </div>
          <Divider />
          <div className={styles['subheader']}>
            Fare
          </div>
          <div className={styles['container-main']} style={{ padding: "0px 16px" }}>
            <div>
              Adult ({totalPassengers}x)
            </div>
            <div>
              {IDR.format(fareAmount)}
            </div>
          </div>
          <div className={styles['container-main']} style={{ padding: "0px 16px 12px 16px" }}>
            <div>
              Service Fee
            </div>
            <div>
              {IDR.format(serviceFee)}
            </div>
          </div>
          <Divider />
          <div className={styles['container-main']}>
            <div className={styles['subheader']} style={{ padding: "0px" }}>
              Total
            </div>
            <div style={{ fontSize: '20px', fontWeight: "600", color: "#43A1FE" }}>
              {IDR.format(totalFare)}
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default TravelInfo