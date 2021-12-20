import React from 'react'
import MoreLink from './MoreLink'
import { moreBtnStyle } from './style'

import { useRouter } from 'next/router'

const Index = () => {
  const classes = moreBtnStyle()
  const router = useRouter()
  // console.log(router)
  return (
    <div className={classes.btnWrapper}>
      <MoreLink localMoreLink={router.pathname} />
    </div>
  )
}

export default Index
