import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { cyan } from '@mui/material/colors'

interface NavItemProps {
  link: string
  label: string
}
const NavItem = ({
  link,
  label
}: NavItemProps) => {
  return (
    <div className={styles['nav-item']}>
      <Link href={link}>
        {label}
      </Link>
    </div>
  )
}

const NavBar = () => {
  return (
    <div className={styles['navbar']}>
      <ul className={styles['navbar-row']}>
        <li>
          <NavItem link='/search' label='Search' />
        </li>
        <li>
          <NavItem link='/mytickets' label='My Tickets' />
        </li>
        <li>
          <NavItem link='/profile' label='Profile' />
        </li>
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <header style={{position:"sticky",top:"0", backgroundColor:"white"}}>
      <div className={styles['container']}>
        <div style={{display:"flex",justifySelf:"center", padding:"10px", width:"auto"}}>
          Train Booking System
        </div>
        <NavBar />
      </div>
      <div style={{width:"100%", height:"5px", background:"lightgray"}}/>

    </header>
  )
}
export default Header