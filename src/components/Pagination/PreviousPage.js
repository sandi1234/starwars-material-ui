import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

const PreviousPage = ({ path, previous }) => {
  let PreviousPageID = ''

  if (previous !== null) {
    PreviousPageID = previous.substring(previous.indexOf('=') + 1)
  } else {
    PreviousPageID = null
  }

  return (
    <>
      {PreviousPageID ? (
        <Link href={(path, PreviousPageID)} passHref>
          <Button variant='contained'>&#10094;</Button>
        </Link>
      ) : (
        ''
      )}
    </>
  )
}

export default PreviousPage
