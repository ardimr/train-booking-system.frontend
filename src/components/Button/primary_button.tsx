import React, { Children } from 'react'
import styles from './styles.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    disabled : boolean;
  }

const PrimaryButton: React.FC<Props> = ({
    children,
    disabled,
    onClick,
}: Props) => {
  return (
    <button className={styles.primaryButton} disabled={disabled} type='submit' onClick={onClick}>
        <div >{children} </div>
    </button>
  )
}

export default PrimaryButton
