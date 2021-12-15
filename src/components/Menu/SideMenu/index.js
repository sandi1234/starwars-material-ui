import React from 'react'
import MenuLink from './MenuLink'
import MenuHeading from './MenuHeading'
import { sideMenu } from './style'
import wrapperFix from '../../../../styles/CustomFix.module.css'

const Index = () => {
  const classes = sideMenu()
  const menuLinks = [
    { link: '/people', linkTxt: 'people' },
    { link: '/starships', linkTxt: 'Starhips' },
    { link: '/vehicles', linkTxt: 'Vehicles' },
  ]
  return (
    <div className={wrapperFix.wrapperFix}>
      <MenuHeading />
      {menuLinks.map((menuLink) => (
        <MenuLink key={menuLink.link} menuLink={menuLink} />
      ))}
    </div>
  )
}

export default Index
