import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tee from '../images/coolie.png';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import snackBar from '../components/snackBar.js';

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


function Post({profileID, profileName, setLocation, bio}) {
  return (
    <ThemeProvider theme={theme}>
        <Card variant="outlined" sx={{borderColor: 'grey', borderRadius: 8, paddingTop: 5, paddingLeft: 5, paddingRight: 5}}>
      <Box 
            display="flex"
            justifyContent="left"
            alignItems="left"
            minHeight="10vh" 

            >
              <h1> <b>Profile</b></h1>
              
      </Box>

      <Avatar style={{marginLeft: "auto", marginRight: "auto", width: 110, height: 110 }} >Dee</Avatar>

      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="15vh"
      >
        <TextField helperText="Required" required style={{marginLeft: "auto", marginRight: "auto"}} sx={{width: 400}} id="FullName" label="Full Name" variant="outlined" /> 
      </Box>

      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="5vh"
      >
        <TextField helperText="Required" multiline rows={5} required style={{marginLeft: "auto", marginRight: "auto"}} sx={{width: 400}} id="Bio" label="Bio" variant="outlined" />
      
      </Box>

      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="15vh"
      >
        <TextField helperText="Required" required style={{marginLeft: "auto", marginRight: "auto"}} sx={{width: 400}} id="Location" label="Location" variant="outlined" />
      
      </Box>

      </Card>

    </ThemeProvider>
  );
}

export default Post;
