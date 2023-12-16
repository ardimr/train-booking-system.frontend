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
  // const className = `${styles.dropdown_menu} ${openProfile? 'open': ''}`
  // console.log(styles['dropdown_menu active'])
  return (
    <div ref={ref} style={{position:"relative"}}>
      <div className={styles['dropdown-profile']} onClick={()=> {setOpenProfile(!openProfile)}}>
        <img src='/user_profile.svg'></img>
      </div>

      {(
        <div className={styles['dropdown_menu']} style={openProfile? {maxHeight:"150px", boxShadow:"0px 0px 1px 1px rgba(0, 0, 0, 0.25)"}: {maxHeight:"0px"}}>
          <div style={{padding:"12px 24px"}}> My Account </div>
          <ul className={styles['dropdown-list']}>
            <li>
              <span>
                <img src='/ticket.svg'/>
                <Link href={'/mytickets'}>
                  Tickets
                </Link>
              </span>
              </li>
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