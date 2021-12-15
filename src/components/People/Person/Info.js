import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'

import customStyles from '../../../../styles/Custom.module.css'

const PersonInfo = ({ person }) => {
  const not = 'n/a'
  return (
    <Grid item item lg={4} md={4} sm={4} xs={12}>
      {person.name != not ? (
        <Paper className={`${customStyles.infoPageBG} `}>
          <Typography align='center' variant='string'>
            Name: {person.name}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.height != not ? (
        <Paper className={`${customStyles.infoPageBG} mt-2`}>
          <Typography
            align='center'
            variant='string'
            className={`${customStyles.cardBG}`}
          >
            Height: {person.height}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.mass != not ? (
        <Paper className={`${customStyles.infoPageBG}`}>
          <Typography
            align='center'
            variant='string'
            className={`${customStyles.cardBG}`}
          >
            Mass: {person.mass}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.hair_color != not ? (
        <Paper className={`${customStyles.infoPageBG}`}>
          <Typography
            align='center'
            variant='string'
            className={`${customStyles.cardBG}`}
          >
            Hair Color: {person.hair_color}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.skin_color != not ? (
        <Paper className={`${customStyles.infoPageBG}`}>
          <Typography
            align='center'
            variant='string'
            className={`${customStyles.cardBG}`}
          >
            Skin Color: {person.skin_color}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.eye_color != not ? (
        <Paper className={`${customStyles.infoPageBG}`}>
          <Typography
            align='center'
            variant='string'
            className={`${customStyles.cardBG}`}
          >
            Eye Color: {person.eye_color}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.birth_year != not ? (
        <Paper className={`${customStyles.infoPageBG}`}>
          <Typography
            align='center'
            variant='string'
            className={`${customStyles.cardBG}`}
          >
            Birth Year: {person.birth_year}
          </Typography>
        </Paper>
      ) : (
        ''
      )}
      {person.gender != not ? (
        <Paper className={`${customStyles.infoPageBG}`}>
          <Typography
            align='center'
            variant='string'
            className={`${customStyles.cardBG}`}
          >
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
