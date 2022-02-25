import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Grid, Tab, Box, AppBar } from '@material-ui/core'
import { Container } from '@mui/material'
import { ProjectCards, Spinner } from '../index'

function TabPanel(props) {
   const {
      title,
      details,
      techUsed,
      value,
      index,
      image,
      href_1,
      href_2,
      href_3,
      href_4,
      figmaSrc,
      figmaDescription,
      ...other
   } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`nav-tabpanel-${index}`}
         aria-labelledby={`nav-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box p={3}>
               <ProjectCards
                  title={title}
                  techUsed={techUsed}
                  details={details}
                  image={image}
                  href_1={href_1}
                  href_2={href_2}
                  href_3={href_3}
                  href_4={href_4}
                  figmaSrc={figmaSrc}
                  figmaDescription={figmaDescription}
               />
            </Box>
         )}
      </div>
   )
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.any.isRequired,
   value: PropTypes.any.isRequired,
}

function a11yProps(index) {
   return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
   }
}

function LinkTab(props) {
   return (
      <Tab
         component="a"
         onClick={(event) => {
            event.preventDefault()
         }}
         {...props}
      />
   )
}

const projects = [
   {
      title: 'Coming Soon Mona-Tech',
      techUsed: 'Tech Used: #JSX, #React, #React-Router, #JavaScript, #Node.js, #Docker, #Jest',
      details: 'A fullstack application for a start-up that informs clients needing web services',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29taW5nJTIwc29vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      href_2: 'https://github.com/Edd-wordd/monaTech',
   },
   {
      title: 'Monsters Rolodex',
      techUsed: 'Tech Used: #JavaScript, #JSX, #CSS, #React',
      details: 'An application that allows users to filter through a monsters card rolodex.',
      image: 'https://images.unsplash.com/photo-1593538573197-4e3ee8a864d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9uc3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      href_1: 'https://edd-wordd.github.io/vr_worlds/',
      href_2: 'https://github.com/Edd-wordd/vr_worlds',
   },
   {
      title: 'Drum Kit',
      techUsed: 'Tech Used: #HTML, #CSS, #JavaScript',
      details:
         'An application that allows users to sample beats from a drum kit using their computer keyboards.',
      image: 'https://images.unsplash.com/photo-1643989996350-01addb8c8228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5lb24lMjBkcnVtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      href_1: 'https://edd-wordd.github.io/Drumkit/',
      href_2: 'https://github.com/Edd-wordd/Drumkit',
   },
   {
      title: 'Number Game',
      techUsed: 'Tech Used: #HTML, #CSS, #JavaScript',
      details:
         'Retro looking guessing game application which allows users to play against the computer.',
      image: 'https://images.unsplash.com/photo-1538226740644-8c7670181991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG5lb24lMjBudW1iZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      href_1: 'https://edd-wordd.github.io/guess_number/',
      href_2: 'https://github.com/Edd-wordd/guess_number',
   },
   {
      title: 'Pig Game',
      techUsed: 'Tech Used: #HTML, #CSS, #JavaScript',
      details:
         'A game for two players, where the objective is for the players to get closest to 21 by rolling the dice.',
      image: 'https://images.unsplash.com/photo-1549660215-4821086b3449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmVvbiUyMHBpZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      href_1: 'https://edd-wordd.github.io/pig_game/',
      href_2: 'https://github.com/Edd-wordd/pig_game',
   },
   {
      title: 'Portfolio Page',
      techUsed: 'Tech Used: #React, #JSX, #Material-UI, #JavaScript,',
      details: 'Personal portfolio page that allows users to view my projects and contact me.',
      image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5lb24lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      href_1: 'https://edd-wordd.github.io/vr_worlds/',
      href_2: 'https://github.com/Edd-wordd/portfolio',
   },
   {
      title: 'Pantry App',
      techUsed:
         'Tech Used: #React, #React-Redux, #React-Router, #Express, #Axios, #Bootstrap, #MySQL',
      details: 'An application that helps build recipes from ingredients you have in your pantry',
      image: 'https://images.unsplash.com/photo-1558013637-a125529cc856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhbnRyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      href_1: 'https://bored-giants.surge.sh',
      href_2: 'https://github.com/Edd-wordd/pantry',
   },
   {
      title: 'White Bear App',
      techUsed:
         'Tech Used: #React, #React-Redux, #React-Router, #Express, #Axios, #Bootstrap, #MySQL, #Regex',
      details: 'Tech Used: Coming Soon',
      image: 'https://images.unsplash.com/photo-1522726119639-f370a2793be7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBiZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      href_1: 'http://feigned-science.surge.sh',
      href_2: 'https://github.com/Edd-wordd/white-bear-mpa',
   },
]

const figmaMocks = [
   {
      title: 'Coming Soon Mona-Tech',
      techUsed: 'Tech Used: #Figma',
      details:
         'A fullstack application for a start-up that informs clients and new devs needing website services',
      image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29taW5nJTIwc29vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      href_4: '',
   },
   {
      title: 'Roberts Communication Network',
      techUsed: 'Tech Used: #Figma, #Photoshop',
      details:
         'A application for satellite dish users that allowed them to purchase and stream horse racing',
      image: 'https://images.unsplash.com/photo-1533284133567-0da9844151ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG9yc2UlMjByYWNpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      href_4: 'RCN Mock-up',
      figmaDescription:
         'Roberts Communication Network - Prototype that allowed users to stream live horse racing from their accounts. Users could purchase packages and view streams from their dashboard',
      figmaSrc: 'assets/RTN_Board.jpg',
   },
   {
      title: 'IONnovate LLC',
      techUsed: 'Tech Used: #Figma',
      details:
         'Company mobile version prototype according to stake holder requests. Provides clients with website services.',
      image: 'https://images.unsplash.com/photo-1494389945381-0fe114b8ea4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlubm92YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      href_4: 'IONnovate Mock-up',
      figmaDescription:
         'IONnovate LLC - Prototype allowed new developers to apply for internships and also gave all the clients needed info for web services.',
      figmaSrc: 'assets/Ionnovate_Board.png',
   },
]
const resume = [
   {
      title: 'Edwards Resume',
      details:
         'Thank you for taking the time to view my page! If you have any questions or would like to collaborate shoot me an email! Look forward to speaking with you soon!',
      image: 'https://images.unsplash.com/photo-1517076731070-13c65bcb2e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhbmslMjB5b3UlMjBuZW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      href_3: 'assets/Edward_Plasencio_Resume.pdf',
   },
]

const useStyles = makeStyles((theme) => ({
   navMain: {
      flexGrow: 1,
      backgroundColor: 'transparent',
      padding: '0 14rem',
      [theme.breakpoints.down('xs')]: {
         padding: '0',
      },
   },
   appBar: {
      backgroundColor: 'transparent',
      margin: '3rem 0',
      backdropFilter: 'blur(50px)',
      [theme.breakpoints.down('md')]: {
         margin: '0 0 1.5rem',
      },
   },
}))

export default function NavTabs() {
   const classes = useStyles()
   const [value, setValue] = React.useState(0)
   const [show, setShow] = useState(false)
   const [loading, setLoading] = useState(false)

   const LoadSpinner = () => {
      setLoading(true)
      setTimeout(() => {
         setLoading(false)
         setShow(!show)
      }, 500)
   }
   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <div className={classes.navMain}>
         <Container maxWidth="xl">
            <AppBar position="static" className={classes.appBar}>
               <Tabs
                  value={value}
                  onChange={handleChange}
                  onClick={LoadSpinner}
                  aria-label="nav tabs"
               >
                  <LinkTab label="Projects" {...a11yProps(0)} />
                  <LinkTab label="Figma Mock-Ups" {...a11yProps(1)} />
                  <LinkTab label="Resume" {...a11yProps(2)} />
               </Tabs>
            </AppBar>
            {loading ? (
               <Spinner />
            ) : (
               <>
                  <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                     {projects.map((project, index) => (
                        <TabPanel
                           key={index}
                           value={value}
                           index={0}
                           techUsed={project.techUsed}
                           title={project.title}
                           details={project.details}
                           image={project.image}
                           href_1={project.href_1}
                           href_2={project.href_2}
                        />
                     ))}
                  </Grid>
                  <Grid container direction="row" alignItems="center" justifyContent="flex-start">
                     {figmaMocks.map((figmaMock, index) => (
                        <TabPanel
                           key={index}
                           value={value}
                           index={1}
                           title={figmaMock.title}
                           techUsed={figmaMock.techUsed}
                           details={figmaMock.details}
                           image={figmaMock.image}
                           href_4={figmaMock.href_4}
                           figmaDescription={figmaMock.figmaDescription}
                           figmaSrc={figmaMock.figmaSrc}
                        />
                     ))}
                  </Grid>
                  <Grid container direction="row" alignItems="center" justifyContent="center">
                     {resume.map((resume, index) => (
                        <TabPanel
                           key={index}
                           value={value}
                           index={2}
                           title={resume.title}
                           details={resume.details}
                           image={resume.image}
                           href_3={resume.href_3}
                           href_4={resume.href_4}
                           figmaSrc={resume.figmaSrc}
                        >
                           Resume
                        </TabPanel>
                     ))}
                  </Grid>
               </>
            )}
         </Container>
      </div>
   )
}
