import React from 'react'
import Info from './Info'
import ImageUrl from './ImageUrl'
import { Grid } from '@mui/material'
import { starshipStyle } from './style'
import InfoPageMenu from '../../Menu/InfoPageMenu'

const Index = ({ data }) => {
  const classes = starshipStyle()
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
