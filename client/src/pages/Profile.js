import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MockAvatarImage from '../images/AvatarMock.png';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import snackBar from '../components/snackBar.js';
import '../components/fancyButtons.css';
import Header from '../components/header';
import { Container, ImageListItem } from '@mui/material';
import PostsListPage from './PostsListPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#689ca4',
    },
    secondary: {
      main: '#689ca4',
    },
  },
});


function Profile({profileID, profileName, setLocation, bio}) {
  return (
    <ThemeProvider theme={theme}>
      <Header style={{position:"fixed"}}/>
        <div style={{position: "absolute",
          top: "5em",
          zIndex: "0",
          width: "100%",
          justifyContent: "space-around",
          alignItems: 'center',
          padding: '20px',
          paddingBottom: '400px',
          backgroundColor: '#e1ebed',
          backgroundImage: 'linear-gradient(#e1ebed, #e1ebed, #e1ebed, white)',
          }}>
        </div>
        <Container>
       

      <div class="Avatar" style={{paddingTop: "6em", paddingBottom: "10em"}}>
        <Avatar style={{backgroundImage: "url(" + MockAvatarImage + ")",transform: "translate(-50%, -50%)", backgroundRepeat: "no-wrap", backgroundPosition: "center", backgroundSize:"200px", position: "absolute", left: "50%", right:"50%", width: 110, height: 110 }}> </Avatar>
      </div>

      <Box 
            left= "43%"
            position= "absolute"
            display="flex"
            minHeight="7vh" 
            zIndex= "3"
            bottomPadding="1em"
            >
              <h1> <b>FULL NAME</b></h1>
              
      </Box>


      <PostsListPage/>


      <Box
      display="flex"
      >
        <a href="/profile-settings" style={{marginLeft: "81%"}}><button style={{ position:"fixed", bottom: "30px", right: "40px", width: "200px", fontSize: "1.3em"}} sx={{width: 400}} className="btn btn-fancy">Edit Profile</button></a>
      </Box>

      </Container>
    </ThemeProvider>
  );
}

export default Profile;
