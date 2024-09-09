import React from 'react'
import styles from '../style'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 font-poppins font-medium bg-blue-gradient text-primary outline-none  rounded-[10px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button
