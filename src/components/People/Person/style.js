import { makeStyles } from '@mui/styles'

export const personStyle = makeStyles({
  root: {
    display: 'flex',
    padding: '20px',
  },

  wrapper: {
    maxWidth: '960px',
    margin: '0 auto',
  },

  transImage: {
    opacity: 0.5,
  },

  infoPageBG: {
    padding: ' 10px',
    marginBottom: '5px',
    background: ' rgba(0, 0, 0, 0.4)',
    border: '1px solid ghostwhite',
    color: 'whitesmoke',

    '&:hover': {
      background: 'rgba(255, 1, 1, 0.5)',
    },
  },
})
