import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import { moreBtnStyle } from './style'

const MoreLink = ({ localMoreLink }) => {
  const classes = moreBtnStyle()
  const strPath =
    'More of ' + localMoreLink.substring(localMoreLink.indexOf('/') + 1)
  console.log(strPath)
  return (
    <Link href={`${localMoreLink}/page/2`} passHref>
      <Button className={classes.moreBtn} variant='danger'>
        {strPath.toUpperCase()}
      </Button>
    </Link>
  )
}

export default MoreLink
