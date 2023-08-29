import React from 'react'
import styles from './styles.module.css'
import PrimaryButton from '../Button/primary_button'
import {BsArrowRightCircle} from 'react-icons/bs'
const TravelCard = () => {
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
                <div >
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
                <PrimaryButton disabled={false} children='Select'/>
            </div>
            
        </div>
    </div>
  )
}

export default TravelCard