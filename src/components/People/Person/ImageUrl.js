import React from 'react'
import { Grid, CardMedia } from '@mui/material'
import customStyles from '../../../../styles/Custom.module.css'

const PersonImage = ({ image, name }) => {
  const defaultIamge = 'https://dummyimage.com/400/000.png/fff'
  console.log('default image: ' + defaultIamge)
  return (
    <Grid item lg={8} md={8} sm={8} xs={12}>
      <CardMedia
        className={customStyles.transImage}
        component='img'
        image={image != undefined ? image : defaultIamge}
        alt={name}
      />
    </Grid>
  )
}

export default PersonImage
