import React from 'react'
import MenuLink from './MenuLink'
import Link from 'next/link'
import { Grid } from '@mui/material'
import { infoPageMenu, RootWrapper } from './style'

const Index = () => {
  const classes = infoPageMenu()
  const menuLinks = [
    { link: '/people', linkTxt: 'people' },
    { link: '/starships', linkTxt: 'starhips' },
    { link: '/vehicles', linkTxt: 'vehicles' },
  ]
  return (
    <Grid item xs={12}>
      <RootWrapper>
        {menuLinks.map((menu) => (
          <MenuLink key={menu.link} menu={menu} />
        ))}
      </RootWrapper>
    </Grid>
  )
}

export default Index
