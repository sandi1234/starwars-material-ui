import React from 'react'
import Link from 'next/link'
import Name from './Name'
import { Paper } from '@mui/material'
import { globalStyle } from '../../muiGlobalStyles/style'

const Index = ({ data, API_URL }) => {
  // console.log(API_URL)
  const classes = globalStyle()

  let url = ''

  if (API_URL != undefined) {
    url = data.url.substring(API_URL.length, data.url.length)
  } else {
    url = ''
  }

  return (
    <Link href={url} passHref underline='none'>
      <Paper className={classes.linkData}>
        <Name name={data.name} />
      </Paper>
    </Link>
  )
}

export default Index
