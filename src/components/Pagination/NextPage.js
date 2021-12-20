import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import { paginationStyle } from './style'

const NextPage = ({ path, next }) => {
  const classes = paginationStyle()
  let nextPageID = ''

  if (next !== null) {
    nextPageID = next.substring(next.indexOf('=') + 1)
  } else {
    nextPageID = null
  }

  return (
    <>
      {nextPageID ? (
        <Link href={(path, nextPageID)} passHref>
          <Button className={classes.btnStyle} variant='contained'>
            &#10095;
          </Button>
        </Link>
      ) : (
        ''
      )}
    </>
  )
}

export default NextPage
