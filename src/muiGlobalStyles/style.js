import { makeStyles } from '@mui/styles'

export const globalStyle = makeStyles((theme) => ({
  homePage: {
    marginTop: '12.5%',
  },

  pagePadding: {
    padding: '20px',
  },

  root: {
    flexGrow: 1,
    padding: '50px 0px 100px 0px',
    // backgroundColor: 'whitesmoke',
  },

  wrapper: {
    padding: '40px 0px 40px 0px',
    maxWidth: '960px',
    margin: '0 auto',
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

  linkData: {
    textAlign: 'center',
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid ghostwhite',
    color: 'whitesmoke',
    cursor: 'pointer',

    '&:hover': {
      background: 'rgba(255, 1, 1, 0.5)',
    },
  },

  uniNameCardWrapper: {
    margin: '15px 0px 15px 0px',
  },
}))
