"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import './styles.module.css'
import { WagonSelector } from './data'

interface WagonProps {
  wagonData: WagonSelector,
  activeWagon: WagonSelector,
  handleActiveWagon: (wagon: WagonSelector) => void
}

type WagonData = {
  id: number
  label: string
}

const wagons:WagonData[] = [
  {
    id: 1,
    label: "EXEC-1"
  },
  {
    id: 2,
    label: "EXEC-2"
  },
  {
    id: 3,
    label: "EXEC-3"
  },
  {
    id: 4,
    label: "EXEC-4"
  },
]

const Wagon = ({wagonData, activeWagon, handleActiveWagon}:WagonProps) => {
  
  const isActive = (wagonData.wagon_number===activeWagon.wagon_number)
  
  const onClickHandler = (event:React.MouseEvent<HTMLDivElement>) => {
    handleActiveWagon(wagonData)
  }

  return(
    <div className={isActive? styles["wagon-card-active"]: styles["wagon-card"]} onClick={onClickHandler}>
        {`${wagonData.wagon_class}-${wagonData.wagon_number}`}
    </div>
  )
  
}

interface WagonsProps {
  wagons: WagonSelector[]
  activeWagon: WagonSelector
  handleActiveWagon: (wagon: WagonSelector) => void
}
const Wagons = ({activeWagon, wagons, handleActiveWagon}:WagonsProps) => {
  // console.log(styles)
  // const initialWagonId = wagons[0].id
  // const [activeWagon, setActiveWagon] = useState<WagonSelector>(initialWagonId)

  // const handleSelectWagon = (wagon:WagonSelector) => {
  //   setActiveWagon(wagon)
  // }
  return (
    <div className={styles["wagon-container"]}>
      {wagons.map((wagon,index) => (
        <Wagon key= {wagon.wagon_number} wagonData={wagon} activeWagon={activeWagon} handleActiveWagon={handleActiveWagon}/>
      ))}
    </div>
  )
}

export default Wagons