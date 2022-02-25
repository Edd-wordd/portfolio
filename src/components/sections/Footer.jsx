import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles({
   footer: {
      width: '100%',
      height: 'auto',
      padding: '1.5rem 0rem',
      borderTop: '.5px solid rgba(109,113,126, 0.9)',
      marginTop: '5rem',
      backgroundColor: '#111724',
      color: '#6d717e',
   },
})

const Footer = () => {
   const classes = useStyles()
   return (
      <>
         <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            className={classes.footer}
         >
            <Typography>© Copyright {new Date().getFullYear()} | All Rights Reserved</Typography>
         </Grid>
      </>
   )
}

export default Footer
