import React from 'react'
import Link from 'next/link'
import { iconCardStyle } from './style'

const Icon = ({ icon, localLink }) => {
  const classes = iconCardStyle()
  return (
    <div>
      <Link href={localLink} passHref>
        <i className={`${icon} ${classes.iconStyle}`}></i>
      </Link>
    </div>
  )
}

export default Icon
