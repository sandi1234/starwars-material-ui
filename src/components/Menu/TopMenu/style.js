import { makeStyles } from '@mui/styles'

export const logoStyle = makeStyles((theme) => ({
  wrapper: {
    textAlign: 'center',
  },
  logo: {
    margin: '20px auto',
    fontSize: '48px',
    color: 'rgba(255, 0, 0, 0.8)',
    cursor: 'pointer',

    '&:hover': {
      color: 'rgba(255, 0, 0, 1)',
    },
  },
}))
