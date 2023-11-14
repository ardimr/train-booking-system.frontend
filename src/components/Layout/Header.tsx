"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import SecondaryButton from '../Button/SecondaryButton'
import { LiaTrainSolid } from 'react-icons/lia'


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
  const router = useRouter()  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false);
    router.push('/search')
  }
  
  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className={styles['navbar']}>
      <ul className={styles['navbar-row']}>
        <li>
          <NavItem link='/search' label='Search' />
        </li>
        <li>
          <NavItem link='/mytickets' label='My Tickets' />
        </li>
        <>
          {
            isAuthenticated
              ? <>
                  <li>
                    <NavItem link='/profile' label='Profile' />
                  </li>
                  <li>
                    <SecondaryButton style={{padding:"5px 10px", marginLeft:"5px", backgroundColor:"white", color:"#4899e5"}} onClick={handleLogout}>Logout</SecondaryButton>
                  </li>
                </>
              : <>
                <li style={{marginRight:"10px"}}>
                  <SecondaryButton style={{padding:"5px 10px", marginLeft:"5px", backgroundColor:"white", color:"#4899e5"}} onClick={() => { router.push('/login') }}>Login</SecondaryButton>
                  {/* <button 
                    style={{
                      padding:"5px 10px",
                      marginLeft:"5px",
                      backgroundColor:"white",
                      color:"blue",
                      // outline:"1px solid white",
                      boxSizing:"border-box",
                      borderRadius:"5px",
                      border: 0,
                      alignSelf:"center",
                      justifySelf:"center"
                    }}
                    onClick={() => { router.push('/login') }}
                  >
                    Login
                  </button> */}
                </li>
                <li style={{marginRight:"10px"}}>
                  <SecondaryButton style={{padding:"5px 10px", marginLeft:"5px", color:"white", border:"1px solid white"}} onClick={() => { router.push('/registration') }}>Register</SecondaryButton>
                </li>
              </>
          }
        </>


      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <header style={{ position: "sticky", top: "0", backgroundColor: "#43A1FE" }}>
      <div className={styles['container']}>
        <div style={{ display: "flex", justifySelf: "center", padding: "10px", alignItems:"center" }}>
          {/* <LiaTrainSolid size={48}/> */}
          <div style={{display:"flex", fontWeight:"bold", fontSize:"24px", width: "300px", color:"white", fontFamily:"Montserrat, sans-serif"}}>
            Train Booking System
          </div>
        </div>
        <NavBar />
      </div>
      {/* <div style={{ width: "100%", height: "5px", background: "lightgray" }} /> */}

    </header>
  )
}
export default Header