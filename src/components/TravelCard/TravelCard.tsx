import React from 'react'
import styles from './styles.module.css'
import PrimaryButton from '../Button/primary_button'
import {BsArrowRightCircle} from 'react-icons/bs'
import { TravelData } from '@/models/travel'

interface Props {
    travelData: TravelData
}

const TravelCard = ({travelData}: Props) => {
    const departure_schedule = new Date(travelData.departure_schedule)
    const arrival_schedule = new Date(travelData.arrival_schedule)
    const IDR = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
    });
    
  return (
    <div className={styles.travelCard}>
        <div className={styles.container1}>
            <div className={styles.text1}>
                {travelData.train_name} ({travelData.travel_code})
                {/* Ciremai (144) */}
            </div>
            <div className={styles.subtext}>
                {travelData.wagon_class.wagon_class_name}
            </div>
        </div>
        <div className={styles.container2}>
            <div className={styles.subContainer1}>
                <div className={styles.text1}>
                {String(departure_schedule.getHours()).padStart(2,'0')}:{String(departure_schedule.getMinutes()).padStart(2,'0')}
                </div>
                <div className={styles.subtext}>
                    {travelData.departure_station.name} ({travelData.departure_station.code})
                </div>
            </div>
            <div className={styles.subContainer2}>
                <div style={{alignSelf:'center'}}>
                    <BsArrowRightCircle fontSize={20}  />
                </div>
                <div >
                    {travelData.duration.hour}j {travelData.duration.minute}m
                </div>
            </div>
            {/* <div className={styles.subContainer2}>
 
            </div> */}
            <div className={styles.subContainer1}>
                <div className={styles.text1}>
                    {String(arrival_schedule.getHours()).padStart(2,'0')}:{String(arrival_schedule.getMinutes()).padStart(2,'0')}
                </div>
                <div className={styles.subtext}>
                    {travelData.destination_station.name} ({travelData.destination_station.code})
                </div>
            </div>
            
        </div>
        <div className={styles.container1}>
            <div className={styles.price}>
                {IDR.format(travelData.cost.amount)}
            </div>
            <div className={styles.subtext}>
                Available
            </div>
            <div className={styles.selectButton} >
                <PrimaryButton disabled={false} children='Select'/>
            </div>
            
        </div>
    </div>
  )
}

export default TravelCard