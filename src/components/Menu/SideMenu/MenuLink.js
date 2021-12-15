import React from 'react'
import { Paper, Typography } from '@mui/material'
import Link from 'next/link'
import { sideMenu } from './style'

const MenuLink = ({ menuLink }) => {
  const classes = sideMenu()
  return (
    <Link href={menuLink.link} underline='none'>
      <Paper className={classes.sideMenu}>
        <Typography variant='string'>{menuLink.linkTxt}</Typography>
      </Paper>
    </Link>
  )
}

export default MenuLink
