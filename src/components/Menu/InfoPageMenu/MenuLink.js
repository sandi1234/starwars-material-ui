import React from 'react'
import Link from 'next/link'
import { infoPageMenu } from './style'
import { useRouter } from 'next/router'

const MenuLink = ({ menu }) => {
  const classes = infoPageMenu()

  const router = useRouter()

  var page = router.asPath.substring(router.asPath.indexOf('/') + 1)
  var menuRoute = menu.link.substring(menu.link.indexOf('/') + 1)

  if (router.query.id > 0) {
    page = router.asPath.substring(
      router.asPath.indexOf('/') + 1,
      router.pathname.lastIndexOf('/[id]')
    )
  }
  return (
    <Link href={menu.link} passHref>
      <div
        className={
          page == menuRoute ? classes.infoMenuActive : classes.infoMenu
        }
      >
        {menu.linkTxt}
      </div>
    </Link>
  )
}

export default MenuLink
