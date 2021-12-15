import React from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  console.log(router)

  var page = router.asPath.substring(
    router.asPath.indexOf('/') + 1
    // router.asPath.lastIndexOf('/')
  )

  return (
    <div>
      <h1>{page}</h1>
    </div>
  )
}

export default Index
