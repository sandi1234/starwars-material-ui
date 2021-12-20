import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { personStyle } from './style'

const PersonInfo = ({ person }) => {
  const classes = personStyle()
  const not = 'n/a'
  return (
    <Grid item item lg={4} md={4} sm={4} xs={12}>
      {person.name != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Name: {person.name}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.height != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Height: {person.height}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.mass != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Mass: {person.mass}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.hair_color != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Hair Color: {person.hair_color}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.skin_color != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Skin Color: {person.skin_color}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.eye_color != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Eye Color: {person.eye_color}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.birth_year != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Birth Year: {person.birth_year}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.gender != not ? (
        <Paper className={classes.infoPageBG}>
          <Typography align='center' variant='string'>
            Gender: {person.gender}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
    </Grid>
  )
}

export default PersonInfo
