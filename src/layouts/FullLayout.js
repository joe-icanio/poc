import { Box, Container, experimentalStyled } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { TopbarHeight } from '../assets/global/Theme-variable'
import Footer from './footer/Footer'
import Header from './side-bar/Header'
import Sidebar from './side-bar/Sidebar'

const MainWrapper = experimentalStyled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  width: '100%',
}))
const PageWrapper = experimentalStyled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('sm')]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '64px',
  },
}))

const FullLayout = ({ children }) => {
  //
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const [snackbarMessageValidation, setSnackBarMessageValidation] = useState('')
  const [severity, setSeverity] = useState('error')
  const [openValidation, setOpenValidation] = useState(false)
  const [menuItem, setMenuItem] = useState([
    'Dashboard',
    'Employee Management',
    'Customer Management',
    'About Us',
  ])
  const [notification, setNotification] = useState('')
  const [anchorNotification, setAnchorNotification] = React.useState(null)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const changeNotificationsStatus = () => {
    setNotificationsEnabled(prevStatus => !prevStatus)
    handleClose()
  }
  const [mailLoad, setMailLoad] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleNotificationClose = () => {
    setAnchorNotification(null)
  }
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleNotificationClick = event => {
    setAnchorNotification(event.currentTarget)
    setMailLoad(true)
  }

  const handleMailNotificationClose = message => {}

  return (
    <MainWrapper
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header
        sx={{ backgroundColor: '#ffffff' }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
        anchorNotification={anchorNotification}
        setAnchorNotification={setAnchorNotification}
        handleNotificationClick={handleNotificationClick}
        notification={notification}
        handleMailNotificationClose={handleMailNotificationClose}
        notificationsEnabled={notificationsEnabled}
        changeNotificationsStatus={changeNotificationsStatus}
        handleNotificationClose={handleNotificationClose}
        anchorEl={anchorEl}
        handleClick={handleClick}
        setAnchorEl={setAnchorEl}
        mailLoad={mailLoad}
      />
      <Box style={{ width: '100%' }} display={'flex'}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
          menuItem={menuItem}
        />

        <PageWrapper>
          <Container
            className='kathur'
            sx={{
              maxWidth: '100% !important',
              backgroundColor: '#FFF9F380',
              // padding: isSidebarOpen && smUp ? "1px" : "10px !Important",
              paddingTop: '15px',
              paddingLeft: isSidebarOpen ? '250px!important' : '',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                minHeight: 'calc(100vh - 170px)',
                marginBottom: '20px',
                px: '15px',
              }}
            >
              {children}
            </Box>
          </Container>
        </PageWrapper>
      </Box>
      <Footer />
      {/* <SnackBar
        snackbarMessageValidation={snackbarMessageValidation}
        openValidation={openValidation}
        handleCloseValidation={handleCloseValidation}
        severity={severity}
      /> */}
    </MainWrapper>
  )
}

export default FullLayout
