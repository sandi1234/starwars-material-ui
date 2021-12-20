import React from 'react'
import Info from './Info'
import ImageUrl from './ImageUrl'
import InfoPageMenu from '../../Menu/InfoPageMenu'
import { Grid } from '@mui/material'
import { vehicleStyle } from './style'

const Index = ({ data }) => {
  const classes = vehicleStyle()
  const image = undefined
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Grid container spacing={2}>
          <InfoPageMenu />
          <ImageUrl image={image} name={data.name} />
          <Info data={data} />
        </Grid>
      </div>
    </div>
  )
}

export default Index
