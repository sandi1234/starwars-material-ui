import React from 'react'
import Info from './Info'
import ImageUrl from './ImageUrl'
import { Grid } from '@mui/material'
import { personStyle } from './style'
import InfoPageMenu from '../../Menu/InfoPageMenu'

const Index = ({ data, path }) => {
  const classes = personStyle()
  const image = undefined
  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.wrapper}>
        <InfoPageMenu />
        <ImageUrl image={image} name={data.name} />
        <Info person={data} />
      </Grid>
    </div>
  )
}

export default Index
