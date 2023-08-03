import React, { Children } from 'react'
import styles from './styles.module.css'

interface Props {
    children?: React.ReactNode;
    disabled : boolean;
  }

const PrimaryButton: React.FC<Props> = ({
    children,
    disabled
}: Props) => {
  return (
    <button className={styles.primaryButton} disabled={disabled} type='submit'>
        <text >{children} </text>
    </button>
  )
}

export default PrimaryButton
