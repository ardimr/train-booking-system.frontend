import React from 'react'
import styles from './styles.module.css'
import { Ticket } from '@/models/ticket'
import dayjs from 'dayjs'
import { LiaTrainSolid } from 'react-icons/lia'
import { useRouter } from 'next/navigation'

interface TicketProps {
  data : Ticket
}
const TicketCard = ({data}:TicketProps) => {
  const departureSchedule = dayjs(data.DepartureSchedule)
  const arrivalSchedule = dayjs(data.ArrivalSchedule)
  const router = useRouter()
  const onClickHandler = () => {
    router.push(`/mytickets/${data.TicketID}`)
  }
  return (
    <div className={styles['ticket-card']} onClick={onClickHandler}>
      <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between", padding:"0px 0 12px 0"}}>
        <div style={{alignItems:"center", display:"flex", flexDirection:"row"}}>
          <div style={{marginRight:"5px"}}>
            Booking Code
          </div>
          <div style={{padding:"3px 5px", borderRadius:"5px", background:"#43A1FE", color:"white", fontSize:"smaller"}}>
            {data.BookingCode}
          </div>
        </div>
        <div style={{padding:"3px 5px", borderRadius:"5px", background:"orange", color:"white", fontSize:"smaller"}}>
          {data.Status}
        </div>
      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{justifySelf:"center", alignSelf:"center"}}>
          <LiaTrainSolid style={{fontSize:"36px"}}/>
        </div>
        <div style={{display:"flex", flexDirection:"column", marginLeft:"15px"}}>
          <div style={{fontSize:"large", fontWeight:"bold"}}>
            {data.DepartureStation.Name} → {data.DestinationStation.Name}
          </div>
          <div style={{paddingTop:"8px"}}>
            {departureSchedule.format('ddd, DD MMM YYYY HH:mm')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard