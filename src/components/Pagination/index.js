import NextPage from './NextPage'
import PageNumber from './PageNumber'
import PreviousPage from './PreviousPage'
import { useRouter } from 'next/router'
import { paginationStyle } from './style'

const Index = ({ next, pageNumber, previous, spaceing }) => {
  const classes = paginationStyle()
  const router = useRouter()
  const path = router.pathname.split('[id]')[0]

  return (
    <div className={classes.wrapper}>
      <PreviousPage path={path} previous={previous} />
      <PageNumber path={path} pageNumber={pageNumber} spaceing={spaceing} />
      <NextPage path={path} next={next} />
    </div>
  )
}

export default Index
