import React, { Children } from 'react'
import styles from './styles.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    disabled? : boolean;
  }

const SecondaryButton: React.FC<Props> = ({
    children,
    disabled,
    onClick,
    ...Props
}: Props) => {
  return (
    <button className={styles["secondary-button"]} disabled={disabled} type='submit' onClick={onClick} {...Props}>
        <div >{children}</div>
    </button>
  )
}

export default SecondaryButton
