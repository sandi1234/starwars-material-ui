import React from 'react'
import { Paper, Typography } from '@mui/material'
import Link from 'next/link'
import { sideMenu } from './style'
import { useRouter } from 'next/router'

const MenuLink = ({ menuLink }) => {
  const classes = sideMenu()

  const router = useRouter()

  var page = router.asPath.substring(router.asPath.indexOf('/') + 1)
  var menuRoute = menuLink.link.substring(menuLink.link.indexOf('/') + 1)

  if (router.query.id > 0) {
    page = router.asPath.substring(
      router.asPath.indexOf('/') + 1,
      router.asPath.lastIndexOf('/page')
    )
  }

  // console.log('side: ' + page)
  // console.log('side tekst: ' + menuRoute)
  return (
    <Link href={menuLink.link} passHref underline='none'>
      <Paper
        className={
          page == menuRoute ? classes.sideMenuActive : classes.sideMenu
        }
      >
        <Typography variant='string'>{menuLink.linkTxt}</Typography>
      </Paper>
    </Link>
  )
}

export default MenuLink
