import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { useOnClickOutside } from "usehooks-ts"

interface Props {
  handleLogout: () => void;
}
const DropdownProfile = (
  {handleLogout}: Props
) => {
  const [openProfile, setOpenProfile] = useState<boolean>(false)
  const ref = useRef(null)
  const handleClickOutside = () => {
    setOpenProfile(false)
  }
  useOnClickOutside(ref, handleClickOutside)
  // const className = `styles['dropdown-menu.${openProfile? 'active': 'inactive'}']`
  // console.log(className)
  return (
    <div ref={ref} style={{position:"relative"}}>
      <div className={styles['dropdown-profile']} onClick={()=> {setOpenProfile(!openProfile)}}>
        <img src='/user_profile.svg'></img>
      </div>

      {openProfile && (
        <div className={styles['dropdown-menu']}>
          <div style={{padding:"8px 24px"}}> My Account </div>
          <ul className={styles['dropdown-list']}>
            <li>
              <span>
                <img src='/ticket.svg'/>
                <Link href={'/mytickets'}>
                  Tickets
                </Link>
              </span>
              </li>
            {/* <li>Tickets</li> */}
            <li>
              <span>
                <img src='/off.svg'/>
                <button onClick={handleLogout}>
                  Logout
                </button>
              </span>
            </li>
          </ul>
        </div>
      )}
      
    </div>
  )
}

export default DropdownProfile