import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

const NextPage = ({ path, next }) => {
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
          <Button variant='contained'>&#10095;</Button>
        </Link>
      ) : (
        ''
      )}
    </>
  )
}

export default NextPage
