import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { paginationStyle, MobileWrapper, DesktopWrapper } from './style'

const PageNumber = ({ pageNumber, path, spaceing }) => {
  const classes = paginationStyle()

  const router = useRouter()
  const pages = Math.ceil(pageNumber / 10)

  let pageNumbers = []
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <MobileWrapper>
        <Button style={{ margin: spaceing }} className={classes.btnStyleActive}>
          {router.query.id} / {pages}
        </Button>
      </MobileWrapper>
      <DesktopWrapper>
        {pageNumbers.map((pageID) => (
          <Link key={pageID} passHref href={`${path}${pageID}`}>
            <Button
              style={{ margin: spaceing }}
              // variant={router.query.id == pageID ? 'contained' : 'outlined'}
              className={
                router.query.id == pageID
                  ? classes.btnStyleActive
                  : classes.btnStyleNumber
              }
            >
              {pageID}
            </Button>
          </Link>
        ))}
      </DesktopWrapper>
    </>
  )
}

export default PageNumber
