import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'

export const RootWrapper = styled('div')(({ theme }) => ({
  paddingRight: '15px',

  [theme.breakpoints.down('sm')]: {
    paddingRight: '0px',
    marginbottom: '40px',
  },
}))

export const sideMenu = makeStyles((theme) => ({
  wrapper: {
    padding: '0px 15px 0px 0px',
  },

  sideMenuHeding: {
    textAlign: 'center',
    padding: '10px',
    marginBottom: '5px',
    background: 'rgba(255, 0, 0, 0.8)',
    border: '1px solid ghostwhite',
    color: 'whitesmoke',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },

  sideMenu: {
    textAlign: 'center',
    padding: '10px',
    marginBottom: '5px',
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid ghostwhite',
    color: 'whitesmoke',
    textTransform: 'uppercase',
    letterSpacing: '2px',

    '&:hover': {
      background: 'rgba(255, 0, 0, 0.75)',
      cursor: 'pointer',
    },
  },

  sideMenuActive: {
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
