import Head from 'next/head'
import { Grid } from '@mui/material'
import IconCard from '../components/IconCard'
import { globalStyle } from '../muiGlobalStyles/style'

export default function Home() {
  const classes = globalStyle()
  const menuItems = [
    { icon: 'fas fa-users', localLink: `/people`, linkTxt: 'people' },
    { icon: 'fas fa-rocket', localLink: `/starships`, linkTxt: 'starships' },
    { icon: 'fas fa-car-alt', localLink: `/vehicles`, linkTxt: 'vehicles' },
  ]
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={classes.homePage}>
        <Grid container className={classes.wrapper}>
          {menuItems.map((menuItem) => (
            <IconCard
              key={menuItem.linkTxt}
              icon={menuItem.icon}
              localLink={menuItem.localLink}
              linkTxt={menuItem.linkTxt}
            />
          ))}
        </Grid>
      </div>
    </div>
  )
}
