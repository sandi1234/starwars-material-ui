import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'

export const MobileWrapper = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('md')]: {
    display: 'inline',
  },
}))

export const DesktopWrapper = styled('div')(({ theme }) => ({
  display: 'inline',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const paginationStyle = makeStyles((theme) => ({
  wrapper: {
    paddingTop: '15px',
    paddingBottom: '15px',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.4)',
  },

  btnStyleNumber: {
    color: 'whitesmoke',

    background: 'rgba(0, 0, 0, 0.4)',

    '&:hover': {
      background: 'rgba(255, 0, 0, 0.55)',
    },
  },

  btnStyle: {
    color: 'whitesmoke',

    background: 'rgba(255, 0, 0, 0.8)',

    '&:hover': {
      background: 'rgba(255, 0, 0, 0.95)',
    },
  },

  btnStyleActive: {
    color: 'whitesmoke',
    background: 'rgba(255, 0, 0, 0.8)',

    '&:hover': {
      background: 'rgba(255, 0, 0, 0.95)',
    },
  },
}))
