import * as React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'

const style = {
   color: '#f5f5f5',
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '50%',
   height: 'auto',
   bgcolor: '#303030',
   borderRadius: '5px',
   boxShadow: 24,
   p: 4,
}
const links = {
   color: '#6d717e',
   textDecoration: 'none',
   padding: '0.5rem',
   border: '1px solid transparent',

   '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
      padding: '0.5rem',
      borderRadius: '5px',
      textDecoration: 'none',
      border: '1px solid #6d717e',
   },
}

export default function FigmaModal(props) {
   const [open, setOpen] = React.useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   return (
      <div>
         <Button sx={links} onClick={handleOpen} title={props.figmaTitle}>
            {props.figmaTitle}
         </Button>

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  {props.figmaTitle}
               </Typography>
               <img
                  width="100%"
                  src={process.env.PUBLIC_URL + `${props.figmaSrc}`}
                  alt={props.figmaTitle}
               />
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {props.figmaDescription}
               </Typography>
            </Box>
         </Modal>
      </div>
   )
}
