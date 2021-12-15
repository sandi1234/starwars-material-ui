import React from 'react'
import Info from './Info'
import ImageUrl from './ImageUrl'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '20px',
  },

  testo: {
    maxWidth: '960px',
    margin: '0 auto',
  },
})

const Index = ({ data, path }) => {
  const classes = useStyles()
  const image = undefined
  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.testo}>
        <ImageUrl image={image} name={data.name} />
        <Info person={data} />
      </Grid>
    </div>
  )
}

export default Index
