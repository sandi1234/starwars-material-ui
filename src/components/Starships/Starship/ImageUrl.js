import React from 'react'
import { Grid } from '@mui/material'
import customStyles from '../../../../styles/Custom.module.css'

const ImageUrl = ({ image, name }) => {
  const defaultIamge = 'https://dummyimage.com/400/000.png/fff'
  console.log('default image: ' + defaultIamge)
  return (
    <Grid item lg={6} md={6} sm={6} xs={12}>
      <Image
        className={customStyles.transImage}
        src={image != undefined ? image : defaultIamge}
        rounded
        alt={name}
      />
    </Grid>
  )
}

export default ImageUrl
