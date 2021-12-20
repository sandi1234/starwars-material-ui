import { styled } from '@mui/material/styles'

export const RootWrapper = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('sm')]: {
    display: 'block',
    marginBottom: '10px',
    border: '1px solid whitesmoke',
    background: 'rgba(255, 0, 0, 0.8)',
    padding: '8px',
    color: 'whitesmoke',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: '2px',
    fontSize: '20px',
    borderRadius: '5px',
  },
}))
