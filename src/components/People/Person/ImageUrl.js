import React from 'react'
import { Grid, CardMedia } from '@mui/material'
import { personStyle } from './style'

const ImageUrl = ({ image, name }) => {
  const classes = personStyle()
  const defaultIamge = 'https://dummyimage.com/400/000.png/fff'
  // console.log('default image: ' + defaultIamge)
  return (
    <Grid item lg={8} md={8} sm={8} xs={12}>
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
