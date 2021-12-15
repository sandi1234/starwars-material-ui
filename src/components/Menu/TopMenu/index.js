import React from 'react'
import LogoIcon from './LogoIcon'
import { logoStyle } from './style'

const Index = ({ logoIconClass }) => {
  const classes = logoStyle()
  return (
    <div className={classes.wrapper}>
      <LogoIcon logoIcon={logoIconClass} />
    </div>
  )
}

export default Index
