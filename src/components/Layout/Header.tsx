
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import SecondaryButton from '../Button/SecondaryButton'


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
                    <SecondaryButton onClick={handleLogout}>Logout</SecondaryButton>
                  </li>
                </>
              : <>
                <li>
                  <SecondaryButton onClick={() => { router.push('/login') }}>Login</SecondaryButton>
                </li>
                <li>
                  <SecondaryButton onClick={() => { router.push('/registration') }}>Register</SecondaryButton>
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
    <header style={{ position: "sticky", top: "0", backgroundColor: "white" }}>
      <div className={styles['container']}>
        <div style={{ display: "flex", justifySelf: "center", padding: "10px", width: "auto" }}>
          Train Booking System
        </div>
        <NavBar />
      </div>
      <div style={{ width: "100%", height: "5px", background: "lightgray" }} />

    </header>
  )
}
export default Header