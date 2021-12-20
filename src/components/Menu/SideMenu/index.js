import React from 'react'
import MenuLink from './MenuLink'
import MenuHeading from './MenuHeading'
import { RootWrapper } from './style'

const Index = () => {
  const menuLinks = [
    { link: '/people', linkTxt: 'people' },
    { link: '/starships', linkTxt: 'starhips' },
    { link: '/vehicles', linkTxt: 'vehicles' },
  ]
  return (
    <RootWrapper>
      <MenuHeading />
      {menuLinks.map((menuLink) => (
        <MenuLink key={menuLink.link} menuLink={menuLink} />
      ))}
    </RootWrapper>
  )
}

export default Index
