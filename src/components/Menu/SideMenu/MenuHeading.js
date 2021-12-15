import React from 'react'
import { Paper, Typography } from '@mui/material'
import { sideMenu } from './style'

const MenuHeading = () => {
  const classes = sideMenu()
  return (
    <div>
      <Paper className={classes.sideMenuHeding}>
        <Typography variant='string'>Menu</Typography>
      </Paper>
    </div>
  )
}

export default MenuHeading
