import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Paper, Typography } from '@material-ui/core'
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined'
import { Hidden } from '@mui/material'

const useStyles = makeStyles((theme) => ({
   portfolioMain: {
      padding: '11rem 0 0 0',
      [theme.breakpoints.down('md')]: {
         padding: '5rem 1rem 3rem 1rem ',
      },
   },
   headerWrapper: {
      backdropFilter: 'blur(18px)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '1rem',
      border: '1px solid #f80759',
   },
   profileImage: {
      width: 285,
      height: 325,
      padding: '2rem 0rem',
      borderRadius: '5rem',
      [theme.breakpoints.down('sm')]: {
         width: 200,
         height: 'auto',
      },
   },
   title: {
      fontWeight: 'bold',
      letterSpacing: '.10rem',
      color: '#f5f5f5',
      [theme.breakpoints.down('sm')]: {
         fontSize: '1.45rem',
      },
   },
   info: {
      letterSpacing: '.10rem',
      color: '#f5f5f5',
   },
   contactInfo: {
      color: '#f5f5f5',
      textDecoration: 'none',
      '&:hover': {
         color: '#66ff00',
         cursor: 'pointer',
      },
   },
   iconWrapper: {
      flexDirection: 'row',
      display: 'flex',
      margin: '.5rem 0rem',
   },
   icons: {
      padding: '0 .5rem 0 0 ',
      color: '#f5f5f5',
   },
   businessIcon: {
      fontSize: '2.5rem',
      margin: '.5rem 1rem 0 -1rem',
      color: '#f5f5f5',
      border: '1px solid transparent',
      borderRadius: '10px',
      padding: '1rem',
      '&:hover': {
         color: '#66ff00',
         border: '1px solid #66ff00',
         borderRadius: '10px',
         transition: 'all .5s ease-in-out',
      },
   },
   strip_1: {
      width: 68,
      height: '100%',
      backgroundColor: '#cc2b5e',
      opacity: '0.5',
      position: 'absolute',
      margin: '0 0 0 20.5rem',
      zIndex: '-1',
      boxShadow: '0 3px 10px 12px rgba(255, 105, 135, .3)',
   },
   strip_2: {
      width: 68,
      height: '100%',
      backgroundColor: '#cc2b5e',
      opacity: '0.5',
      position: 'absolute',
      margin: '0 0 0 27.5rem',
      zIndex: '-1',
      boxShadow: '0 3px 10px 12px rgba(255, 105, 135, .3)',
   },
   strip_3: {
      width: 68,
      height: '100%',
      backgroundColor: '#cc2b5e',
      opacity: '0.5',
      position: 'absolute',
      margin: '0 0 0 34.5rem',
      zIndex: '-1',
      boxShadow: '0 3px 10px 12px rgba(255, 105, 135, .3)',
   },
   strip_4: {
      width: '100%',
      height: 60,
      backgroundColor: '#cc2b5e',
      opacity: '0.5',
      position: 'absolute',
      margin: '16.5rem 0 0 0',
      zIndex: '-1',
      boxShadow: '0 3px 10px 12px rgba(255, 105, 135, .3)',
   },
   strip_5: {
      width: '100%',
      height: 60,
      backgroundColor: '#cc2b5e',
      opacity: '0.5',
      position: 'absolute',
      margin: '22.5rem 0 0 0',
      zIndex: '-1',
      boxShadow: '0 3px 10px 12px rgba(255, 105, 135, .3)',
   },
   strip_6: {
      width: '100%',
      height: 60,
      backgroundColor: '#cc2b5e',
      opacity: '0.5',
      position: 'absolute',
      margin: '28.5rem 0 0 0',
      zIndex: '-1',
      boxShadow: '0 3px 10px 12px rgba(255, 105, 135, .3)',
   },
}))
// const stripes = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
const PortfolioHeader = () => {
   const classes = useStyles()
   return (
      <>
         <Hidden lgDown>
            <div className={classes.strip_1} />
            <div className={classes.strip_2} />
            <div className={classes.strip_3} />
            <div className={classes.strip_4} />
            <div className={classes.strip_5} />
            <div className={classes.strip_6} />
         </Hidden>
         <Container maxWidth="lg" className={classes.portfolioMain}>
            <Paper variant="outlined" className={classes.headerWrapper}>
               <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                  <img
                     alt="portfolio header"
                     src={'assets/edward.jpg'}
                     className={classes.profileImage}
                  />
                  <Grid>
                     <Typography variant="h4" className={classes.title}>
                        Edward Plasencio
                     </Typography>
                     <Typography variant="subtitle1" className={classes.info}>
                        Software Engineer
                     </Typography>
                     <div className={classes.iconWrapper}>
                        <LocationOnOutlinedIcon className={classes.icons} />
                        <Typography variant="subtitle2" className={classes.info}>
                           Las Vegas, Nevada
                        </Typography>
                     </div>
                     <div className={classes.iconWrapper}>
                        <PermPhoneMsgOutlinedIcon className={classes.icons} />
                        <a
                           className={classes.contactInfo}
                           href="tel:+1-915-867-1023"
                           title={'Contact Number'}
                        >
                           <Typography variant="body2">(915) 867-1023</Typography>
                        </a>
                     </div>
                     <div className={classes.iconWrapper}>
                        <MarkEmailReadOutlinedIcon className={classes.icons} />
                        <a
                           className={classes.contactInfo}
                           title={'Contact Email'}
                           href="mailto:edward.plasencio@gmail.com?subject=Attention Edward"
                        >
                           <Typography variant="body2">edward.plasencio@gmail.com</Typography>
                        </a>
                     </div>
                     <a
                        href="https://www.linkedin.com/in/edward-plasencio-2bba891b2/"
                        title={'Linkedin Profile'}
                     >
                        <i className={`fa-brands fa-linkedin ${classes.businessIcon}`} />
                     </a>
                     <a href="https://github.com/Edd-wordd" title={'Github Profile'}>
                        <i className={`fa-brands fa-github-alt ${classes.businessIcon}`} />
                     </a>
                  </Grid>
               </Grid>
            </Paper>
         </Container>
      </>
   )
}

export default PortfolioHeader
