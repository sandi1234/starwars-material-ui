import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { vehicleStyle } from './style'

const Info = ({ data }) => {
  const classes = vehicleStyle()
  const not = 'n/a'
  return (
    <Grid item lg={6} md={6} sm={6} xs={12}>
      {data.name != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Name: {data.name}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {data.model != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Model: {data.model}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {data.manufacturer != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Manufacturer: {data.manufacturer}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {data.cost_in_credits != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Credits: {data.cost_in_credits}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {data.length != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Length: {data.length}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {data.max_atmosphering_speed != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Max Speed: {data.max_atmosphering_speed}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {data.crew != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Crew: {data.crew}
          </Typography>
        </Paper>
      ) : (
        ''
      )}

      {data.passengers != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Passengers: {data.passengers}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {data.cargo_capacity != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Cargo Capacity: {data.cargo_capacity}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {data.consumables != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Consumables: {data.consumables}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {data.vehicle_class != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Vehicle Class: {data.vehicle_class}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
    </Grid>
  )
}

export default Info
