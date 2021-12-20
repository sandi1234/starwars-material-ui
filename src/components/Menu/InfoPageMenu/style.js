import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'

export const RootWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'none',
    flexDirection: 'column',
  },
}))

export const infoPageMenu = makeStyles((theme) => ({
  infoMenu: {
    textAlign: 'center',
    padding: '10px',
    marginBottom: '5px',
    background: 'rgba(0, 0, 0, 0.4)',
    // border: '1px solid ghostwhite',
    color: 'whitesmoke',
    textTransform: 'uppercase',
    letterSpacing: '2px',

    '&:hover': {
      background: 'rgba(255, 0, 0, 0.75)',
      cursor: 'pointer',
    },
  },

  infoMenuActive: {
    textAlign: 'center',
    padding: '10px',
    marginBottom: '5px',
    background: 'rgba(255, 0, 0, 0.4)',
    border: '1px solid ghostwhite',
    color: 'whitesmoke',
    textTransform: 'uppercase',
    letterSpacing: '2px',

    '&:hover': {
      cursor: 'pointer',
    },
  },
}))
