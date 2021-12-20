import React from 'react'
import { iconCardStyle } from './style'
import Link from 'next/link'

const LocalLink = ({ localLink, linkTxt }) => {
  const classes = iconCardStyle()
  return (
    <Link href={localLink} passHref>
      <div className={classes.linkStyle}>{linkTxt}</div>
    </Link>
  )
}

export default LocalLink
