"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'
import './styles.module.css'

interface WagonProps {
  wagonData: WagonData,
  activeWagon: number,
  handleSelectWagon: (wagon: WagonData) => void
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

const Wagon = ({wagonData, activeWagon, handleSelectWagon}:WagonProps) => {
  
  const isActive = (wagonData.id===activeWagon)
  
  const onClickHandler = (event:React.MouseEvent<HTMLDivElement>) => {
    handleSelectWagon(wagonData)
  }

  return(
    <div className={isActive? styles["wagon-card-active"]: styles["wagon-card"]} onClick={onClickHandler}>
        {wagonData.label}
    </div>
  )
  
}
const Wagons = () => {
  // console.log(styles)
  const initialWagonId = wagons[0].id
  const [activeWagon, setActiveWagon] = useState<number>(initialWagonId)

  const handleSelectWagon = (wagon:WagonData) => {
    setActiveWagon(wagon.id)
  }
  return (
    <div className={styles["wagon-container"]}>
      {wagons.map((wagon,index) => (
        <Wagon key= {wagon.id} wagonData={wagon} activeWagon={activeWagon} handleSelectWagon={handleSelectWagon}/>
      ))}
    </div>
  )
}

export default Wagons