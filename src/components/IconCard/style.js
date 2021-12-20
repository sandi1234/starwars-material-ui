import { makeStyles } from '@mui/styles'

export const iconCardStyle = makeStyles((theme) => ({
  gridStyle: {
    padding: '10px',
  },

  iconStyle: {
    fontSize: '48px',
    cursor: 'pointer',
  },

  paperStyle: {
    textAlign: 'center',
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid ghostwhite',
    color: 'rgb(255, 255, 255, 0.6)',

    '&:hover': {
      background: 'rgba(255, 0, 0, 0.4)',
      color: 'rgb(255, 255, 255, 0.8)',
    },
  },

  linkStyle: {
    textAlign: 'center',
    marginTop: '20px',
    letterSpacing: '2px',
    cursor: 'pointer',
    textTransform: 'uppercase',
  },
}))
