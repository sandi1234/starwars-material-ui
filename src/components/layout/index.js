import Head from 'next/head'
import TopMenu from '../Menu/TopMenu'
import { globalStyle } from '../../muiGlobalStyles/style'
const Index = ({ children }) => {
  const classes = globalStyle()
  return (
    <div>
      <Head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
          integrity='sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=='
          crossOrigin='anonymous'
          referrerpolicy='no-referrer'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/brands.min.css'
          integrity='sha512-rQgMaFKZKIoTKfYInSVMH1dSM68mmPYshaohG8pK17b+guRbSiMl9dDbd3Sd96voXZeGerRIFFr2ewIiusEUgg=='
          crossOrigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
      <TopMenu logoIconClass='fab fa-jedi-order' />
      <div className={classes.pagePadding}>{children}</div>
    </div>
  )
}

export default Index
