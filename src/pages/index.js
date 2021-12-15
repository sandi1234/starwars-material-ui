import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Grid } from '@mui/material'
import IconCard from '../components/IconCard'
import customStyles from '../../styles/Custom.module.css'

export default function Home({ data, API_URL }) {
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
      <div className={` ${customStyles.centerContainer}`}>
        <div className={customStyles.centerContent}>
          <Grid container spacing={2}>
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
    </div>
  )
}

// export async function getServerSideProps() {
//   const { API_URL } = process.env

//   const res = await fetch(`${API_URL}/people`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: { data, API_URL },
//   }
// }