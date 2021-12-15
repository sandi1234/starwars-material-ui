import { makeStyles } from '@mui/styles'

export const globalStyle = makeStyles((theme) => ({
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

  linkData: {
    textAlign: 'center',
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid ghostwhite',
    color: 'whitesmoke',

    '&:hover': {
      background: 'rgba(255, 1, 1, 0.5)',
    },
  },
}))
