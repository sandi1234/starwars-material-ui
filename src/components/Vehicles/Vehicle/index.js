import React from 'react'
import Info from './Info'
import ImageUrl from './ImageUrl'
import { Grid } from '@mui/material'
import customStyles from '../../../../styles/Custom.module.css'

const Index = ({ data }) => {
  const image = undefined
  return (
    <div className={` ${customStyles.centerContainer}`}>
      <div className={customStyles.centerContent}>
        <Grid container>
          <ImageUrl image={image} name={data.name} />
          <Info data={data} />
        </Grid>
      </div>
    </div>
  )
}

export default Index
