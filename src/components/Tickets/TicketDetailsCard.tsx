import React from 'react'
import styles from './styles.module.css'
import { TicketDetailsData } from '@/models/ticket'
import { LiaTrainSolid } from 'react-icons/lia'
import dayjs from 'dayjs'
import { Divider } from '@mui/material'
import PrimaryButton from '../Button/PrimaryButton'
import { payBooking } from '@/api/tickets'

interface Props {
  data: TicketDetailsData
}
const TicketDetailsCard = ({data}: Props) => {
  console.log(data)
  const departureSchedule =  dayjs(data.departure_schedule)
  const arrivalSchedule = dayjs(data.arrival_schedule)

  const handleClick = () => {
    payBooking(data.travel_id, data.booking_code).then(() =>
      window.location.reload() // Reload the page
    )
  }
  return (
    <div className={styles['ticket-detail-card']}>
      <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between", padding:"0px 0 8px 0"}}>
        <div style={{alignItems:"center", display:"flex", flexDirection:"row"}}>
          {/* <LiaTrainSolid style={{fontSize:"24px"}}/> */}
          <div style={{fontSize:"large", fontWeight:"bold"}}>
            {data.departure_station.name} → {data.destination_station.name}
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <div style={{marginRight:"5px", fontSize:"smaller"}}>
            Booking Code
          </div>
          <div style={{padding:"3px 5px", borderRadius:"5px", background:"#43A1FE", color:"white", fontSize:"small", marginLeft:'8px'}}>
            {data.booking_code}
          </div>
          <div style={{padding:"3px 5px", borderRadius:"5px", background:"orange", color:"white", fontSize:"smaller", marginLeft:"8px"}}>
            {data.status}
          </div>
        </div>
      </div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <div style={{minWidth:"40%"}}>
          <div style={{fontWeight:"600", padding:"8px 0px"}}>
            Departure
          </div>
          <div style={{fontSize:"smaller"}}>
            ({data.departure_station.code.trimEnd()}) - {data.departure_station.name}
          </div>
          <div style={{fontSize:"smaller"}}>
            {departureSchedule.format('ddd, DD MMM YYYY HH:mm')}
          </div>
        </div>
        <div style={{minWidth:"40%"}}>
          <div style={{fontWeight:"600",padding:"8px 0px"}}>
            Arrival
          </div>
          <div style={{fontSize:"smaller"}}>
            ({data.destination_station.code.trimEnd()}) - {data.destination_station.name}
          </div>
          <div style={{fontSize:"smaller"}}>
            {arrivalSchedule.format('ddd, DD MMM YYYY HH:mm')}
          </div>
        </div>
      </div>
      <Divider style={{margin:"8px 0px"}}/>
      <h3 style={{margin:"0"}}>Passengers</h3>
      {data.passengers.map((passenger) => 
        <div key={passenger.passenger_id} style={{padding:"8px 0px"}}>
            <div style={{fontWeight:"600"}}> 
              {passenger.passenger_name}
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", fontSize:"small", padding:"5px 0px"}}>
              <div> 
                {passenger.passenger_id_type} - {passenger.passenger_id_number}
              </div>
              <div>
                {passenger.seat_label}
              </div>
            </div>
        </div>
      )}
      <PrimaryButton 
        style={{maxWidth:"40%", alignSelf:"center"}}
        disabled={data.status === 'PAID'}
        onClick={handleClick}
      >
        Pay
      </PrimaryButton>
    </div>
  )
}

export default TicketDetailsCard