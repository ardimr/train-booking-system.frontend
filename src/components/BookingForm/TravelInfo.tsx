import React from 'react'
import styles from './styles.module.css'
import {BsArrowRightCircle} from 'react-icons/bs'
import { MdTrain } from 'react-icons/md'
import { Divider } from '@mui/material'
import {LiaTrainSolid} from 'react-icons/lia'
import {LuCalendarDays} from 'react-icons/lu'
const TravelInfo = () => {
  return (
    <div className={styles['travel-info-card']}>
      <div className={styles['subheader']}>
        Departure Train
      </div>
      <div className={styles['container-main']}>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <LiaTrainSolid fontSize={28}/>
          <div style={{display:"flex", flexDirection:"column", paddingLeft:"5px"}}>
            <div style={{fontSize:"14px", fontWeight:"bold"}}>Harina</div>
            <div style={{fontSize:"12px"}}>Economy</div>
          </div>
        </div>
        <div style={{display:"flex", alignItems:"center"}}>
          {/* <LuCalendarDays fontSize={28}/> */}
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", paddingLeft:"5px", fontSize:"14px"}}>
            <div style={{alignSelf:"flex-end", fontWeight:"bolder"}}>Sunday</div>
            <div>15 Aug 2023</div>
          </div>
        </div>
        
      </div>
      <div className={styles['container-main']}>
        <div className={styles['container-cross']}>
          <div> 
            16:50
          </div>
          <div style={{fontSize:"12px"}}>
            Bandung (BD)
          </div>
        </div>
        <div className={styles['container-cross']}>
          <BsArrowRightCircle style={{alignSelf:"center"}}/>
          <div style={{fontSize:"12px"}}>
            5j37m
          </div>
        </div>
        <div className={styles['container-cross']}>
          <div style={{alignSelf:"flex-end"}}> 
            22:50
          </div>
          <div style={{fontSize:"12px"}}>
            Pasar Turi (TG)
          </div>
        </div>
      </div>
      <Divider />
      <div className={styles['subheader']}>
        Fare
      </div>
      <div className={styles['container-main']} style={{padding:"0px 16px"}}>
        <div>
          Adult (2x)
        </div>
        <div>
          Rp190.000
        </div>
      </div>
      <div className={styles['container-main']} style={{padding:"0px 16px 12px 16px"}}>
        <div>
          Service Fee
        </div>
        <div>
          Rp5.000
        </div>
      </div>
      <Divider/>
      <div className={styles['container-main']}>
        <div className={styles['subheader']} style={{padding:"0px"}}>
          Total
        </div>
        <div style={{fontSize:'20px', fontWeight:"600", color:"#43A1FE"}}>
          Rp195.000
        </div>
      </div>
    </div>
  )
}

export default TravelInfo