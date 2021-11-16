import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ImageListItem } from '@mui/material';
import { Button } from '@mui/material';
import Lochitty from './lochitty.png';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'typeface-roboto';


export default function Header() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#e1eced',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#689ca4',
      },
    },
  });
 
  return (
    <ThemeProvider theme={theme}>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      style={{display: 'flex',
      justifyContent: "space-around",
      alignItems: 'center',
      padding: '20px',
      paddingBottom: '50px',
      backgroundColor: '#e1ebed',
      backgroundImage: 'linear-gradient(#e1ebed, #e1ebed, #e1ebed, white)',
    }}
    >
      <img src={Lochitty} style={{width:'130px'}}/>
      <div style={{borderRadius: '40px', paddingRight:'4em', backgroundColor:'transparent', borderColor:'transparent'}}>
        <div style={{borderRadius: '40px', boxShadow: '0px 4px 15px rgba(104, 156, 164, 0.2)'}}>
          <ToggleButton style={{borderColor:'transparent', fontFamily: 'Roboto', padding:'1em', paddingInline:'2em', backgroundColor:'white', fontWeight: "bold", borderRadius: '100px 0 0 100px'}} size='small' value="messages">Messages</ToggleButton>
          <ToggleButton style={{borderColor:'transparent', fontFamily: 'Roboto', padding:'1em', paddingInline:'2em', backgroundColor:'white',fontWeight: "bold", borderRadius: '0 100px 100px 0'}} size='small' value="events">Events</ToggleButton>
        </div>
      </div>
      <Button value="events" style={{color:"#000000"}}>Login</Button> 
    </ToggleButtonGroup>
    </ThemeProvider>
  );
}
