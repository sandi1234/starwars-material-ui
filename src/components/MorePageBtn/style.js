import { makeStyles } from '@mui/styles'

export const moreBtnStyle = makeStyles((theme) => ({
  moreBtn: {
    marginTop: '30px',
    color: 'whitesmoke',
    borderColor: 'whitesmoke',
    background: 'rgba(255, 0, 0, 0.4)',

    '&:hover': {
      color: 'whitesmoke',
      borderColor: 'whitesmoke',
      background: 'rgba(255, 0, 0, 0.8)',
    },
  },
}))
