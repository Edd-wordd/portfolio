import PortfolioHeader from '../src/components/sections/PortfolioHeader'
import { makeStyles } from '@mui/styles'
import NavTabs from '../src/components/sections/NavTabs'
import Footer from '../src/components/sections/Footer'

const useStyles = makeStyles((theme) => ({
   main: {
      backgroundColor: '#111724',
      margin: '-.5rem -.5rem',
      padding: '-10rem',
      position: 'absolute',
      zIndex: '-1',
      width: '100%',
   },
}))
function App() {
   const classes = useStyles()
   return (
      <>
         <div className={classes.main}>
            <PortfolioHeader />
            <NavTabs />
            <Footer />
         </div>
      </>
   )
}

export default App
