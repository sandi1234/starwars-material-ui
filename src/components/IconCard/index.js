import React from 'react'
import Icon from './Icon'
import LocalLink from './LocalLink'
import { Grid, Paper } from '@mui/material'
import { iconCardStyle } from './style'

const Index = ({ icon, localLink, linkTxt }) => {
  const classes = iconCardStyle()
  return (
    <Grid item lg={4} md={4} sm={4} xs={12} className={classes.gridStyle}>
      <Paper className={classes.paperStyle}>
        <Icon localLink={localLink} icon={icon} />
        <LocalLink linkTxt={linkTxt} localLink={localLink} />
      </Paper>
    </Grid>
  )
}

export default Index
