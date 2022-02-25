import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import { FigmaModal } from '../index'

const useStyles = makeStyles((theme) => ({
   cardMain: {
      width: 380,
      minHeight: 435,
      height: 'auto',
      backdropFilter: 'blur(15px)',
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: '#6d717e',
      transform: 'translateZ(0)',
      border: '1px solid transparent',
      [theme.breakpoints.down('xs')]: {
         width: '100%',
      },
      '&:hover': {
         border: '1px solid #66ff00',
         transform: 'scale(1.05)',
         transition: 'all .3s ease-in-out',
         cursor: 'pointer',
      },
   },
   cardTitle: {
      paddingTop: '5px',
      letterSpacing: '0.025em',
      borderBottom: '1px solid rgba(109,113,126, 0.9)',
      fontWeight: 'bold',
   },
   media: {
      height: 185,
   },
   cardText: {
      letterSpacing: '0.025em',
      color: '#6d717e',
      padding: '.5rem 0',
   },
   links: {
      color: '#6d717e',
      textDecoration: 'none',
      borderRadius: '5px',
      border: '1px solid transparent',
      padding: '0.5rem',
      '&:hover': {
         backgroundColor: 'rgba(255,255,255,0.1)',
         padding: '0.5rem',
         borderRadius: '5px',
         textDecoration: 'none',
         border: '1px solid #6d717e',
      },
   },
}))

export default function ProjectCards(props) {
   const classes = useStyles()

   return (
      <Card className={classes.cardMain}>
         <CardMedia className={classes.media} image={props.image} title={props.title} />
         <CardContent>
            <Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
               {props.title}
            </Typography>

            <Typography
               variant="body2"
               color="textSecondary"
               component="p"
               className={classes.cardText}
            >
               {props.details}
            </Typography>
            <Typography
               variant="body2"
               color="textSecondary"
               component="p"
               className={classes.cardText}
            >
               {props.techUsed}
            </Typography>
         </CardContent>
         <CardActions>
            {props.href_1 ? (
               <Button size="small" color="primary">
                  <a
                     className={classes.links}
                     href={props.href_1}
                     title={'View Project Link'}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i className="fa-solid fa-link" /> Project
                  </a>
               </Button>
            ) : null}

            {props.href_2 ? (
               <Button size="small" color="primary">
                  <a
                     className={classes.links}
                     href={props.href_2}
                     title={'View Source Code'}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i className="fa-brands fa-github" /> Source Code
                  </a>
               </Button>
            ) : null}
            {props.href_3 ? (
               <Button size="small" color="primary">
                  <a
                     className={classes.links}
                     href={props.href_3}
                     download={'Edward_Plasencio_Resume'}
                     title={'Download Resume'}
                  >
                     <i className="fa-solid fa-file-pdf" /> Download Resume
                  </a>
               </Button>
            ) : null}
            {props.href_4 ? (
               <>
                  <FigmaModal
                     figmaTitle={props.href_4}
                     figmaSrc={props.figmaSrc}
                     figmaDescription={props.figmaDescription}
                  />
               </>
            ) : null}
         </CardActions>
      </Card>
   )
}
