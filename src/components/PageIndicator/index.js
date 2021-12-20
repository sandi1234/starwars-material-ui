import React from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { RootWrapper } from './style'

const Index = () => {
  const router = useRouter()

  // console.log(router)

  var page = router.asPath.substring(router.asPath.indexOf('/') + 1)

  if (router.query.id > 0) {
    page = router.asPath.substring(
      router.asPath.indexOf('/') + 1,
      router.asPath.lastIndexOf('/page')
    )
  }

  return (
    <RootWrapper>
      <Typography variant='string'>{page}</Typography>
    </RootWrapper>
  )
}

export default Index
