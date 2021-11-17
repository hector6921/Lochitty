import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Button } from '@mui/material';
import Lochitty from './lochitty.png';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'typeface-roboto';
import { color } from '@mui/system';

import './header.css';

export default function Header() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#689ca4',
      },
      ".Mui-selected": {
        backgroundColor: 'rgba(104, 156, 164, 0.28)',
      },
      ".Mui-active": {
        backgroundColor: 'rgba(104, 156, 164, 0.28)',
      },
      ".Mui-checked": {
        backgroundColor: 'rgba(104, 156, 164, 0.28)',
      },
    },
  });
 
  return (
  
  <ThemeProvider theme={theme}>
  <div style={{display: 'flex',
      justifyContent: "space-around",
      alignItems: 'center',
      padding: '20px',
      paddingBottom: '50px',
      backgroundColor: '#e1ebed',
      backgroundImage: 'linear-gradient(#e1ebed, #e1ebed, #e1ebed, white)',
    }}>
      

      <a href="client\src\pages\Home.js"><img src={Lochitty} style={{width:'130px'}}/></a>

    <div style={{backgroundColor: 'white', borderRadius: '40px', backgroundColor:'transparent', borderColor:'transparent', paddingRight: '4em'}}>
    <div style={{backgroundColor: 'white', borderRadius: '40px', boxShadow: '0px 4px 15px rgba(104, 156, 164, 0.2)'}}>

    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={{
        '&:.Mui-selected': {
          backgroundColor: 'rgba(104, 156, 164, 0.28)',
        },
        '&:.Mui-active': {
          backgroundColor: 'rgba(104, 156, 164, 0.28)',
        },
        '&:.Mui-checked': {
          backgroundColor: 'rgba(104, 156, 164, 0.28)',
        },
      }}
    >
      <ToggleButton style={{borderColor:'transparent', fontFamily: 'Roboto', padding:'1em', paddingInline:'2em', fontWeight: "bold", borderRadius: '100px 0 0 100px'}} size='small' value="messages">Messages</ToggleButton>
      <ToggleButton style={{borderColor:'transparent', fontFamily: 'Roboto', padding:'1em', paddingInline:'2em',fontWeight: "bold", borderRadius: '0 100px 100px 0'}} size='small' value="events">Events</ToggleButton>
    </ToggleButtonGroup>

    </div>
      </div>
      <Button value="events" style={{color:"#000000"}}>Login</Button> 

      </div>
      
    </ThemeProvider>
  );
}
