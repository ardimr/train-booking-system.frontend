"use client"
import React from 'react'
import styles from './styles.module.css'
import PrimaryButton from '../Button/primary_button'
import {BsArrowRightCircle} from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const TravelCard = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/booking?travelId=1')
  }
  return (
    <div className={styles.travelCard}>
        <div className={styles.container1}>
            <div className={styles.text1}>
                Ciremai (144)
            </div>
            <div className={styles.subtext}>
                Economy
            </div>
        </div>
        <div className={styles.container2}>
            <div className={styles.subContainer1}>
                <div className={styles.text1}>
                    16:50
                </div>
                <div className={styles.subtext}>
                    Bandung (BD)
                </div>
            </div>
            <div className={styles.subContainer2}>
                <div style={{alignSelf:'center'}}>
                    <BsArrowRightCircle fontSize={20}  />
                </div>
                <div className={styles["subtext"]}>
                    5j 47m
                </div>
            </div>
            {/* <div className={styles.subContainer2}>
 
            </div> */}
            <div className={styles.subContainer1}>
                <div className={styles.text1}>
                    16:50
                </div>
                <div className={styles.subtext}>
                    Bandung (BD)
                </div>
            </div>
            
        </div>
        <div className={styles.container1}>
            <div className={styles.price}>
                Rp 225.000
            </div>
            <div className={styles.subtext}>
                Available
            </div>
            <div className={styles.selectButton} >
                <PrimaryButton disabled={false} children='Select' onClick={handleClick}/>
            </div>
            
        </div>
    </div>
  )
}

export default TravelCard