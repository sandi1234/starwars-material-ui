import React from 'react'
import Link from 'next/link'

import { logoStyle } from './style'
const LogoIcon = ({ logoIcon }) => {
  const classes = logoStyle()
  return (
    <Link href='/' passHref>
      <i className={`${classes.logo} ${logoIcon}`}></i>
    </Link>
  )
}

export default LogoIcon
