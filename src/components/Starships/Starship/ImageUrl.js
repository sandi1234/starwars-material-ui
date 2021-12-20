import React from 'react'
import { Grid, CardMedia } from '@mui/material'
import { starshipStyle } from './style'

const ImageUrl = ({ image, name }) => {
  const classes = starshipStyle()
  const defaultIamge = 'https://dummyimage.com/400/000.png/fff'
  // console.log('default image: ' + defaultIamge)
  return (
    <Grid item lg={6} md={6} sm={6} xs={12}>
      <CardMedia
        className={classes.transImage}
        component='img'
        image={image != undefined ? image : defaultIamge}
        alt={name}
      />
    </Grid>
  )
}

export default ImageUrl
