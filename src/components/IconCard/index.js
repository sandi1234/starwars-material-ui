import React from 'react'
import Icon from './Icon'
import LocalLink from './LocalLink'
import { Grid, Paper } from '@mui/material'

import styles from '../../../styles/Custom.module.css'

const Index = ({ icon, localLink, linkTxt }) => {
  return (
    <Grid item lg={4} md={4} sm={4} xs={12}>
      <Paper
        className={`${styles.center} ${styles.cardIcon} ${styles.cardIconMP} mt-3`}
      >
        <Icon localLink={localLink} icon={icon} />
        <LocalLink linkTxt={linkTxt} localLink={localLink} />
      </Paper>
    </Grid>
  )
}

export default Index
