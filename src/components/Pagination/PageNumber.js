import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import styles from '../../../styles/Custom.module.css'

const PageNumber = ({ pageNumber, path, spaceing }) => {
  const router = useRouter()
  const pages = Math.ceil(pageNumber / 10)

  let pageNumbers = []
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      {pageNumbers.map((pageID) => (
        <Link key={pageID} href={`${path}${pageID}`}>
          <Button
            style={{ margin: spaceing }}
            variant={router.query.id == pageID ? 'contained' : 'outlined'}
            className={router.query.id == pageID ? '' : styles.paginationNumber}
          >
            {pageID}
          </Button>
        </Link>
      ))}
    </>
  )
}

export default PageNumber
