import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ImageListItem } from '@mui/material';
import { Button } from '@mui/material';
import Lochitty from './lochitty.png'

export default function Header() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      style={{display: 'flex',
      justifyContent: "space-around",
      alignItems: 'center',
      padding: '10px' 
    }}
    >
      <img src={Lochitty} style={{width:'130px'}}/>
      <div style={{borderRadius: '20px', boxShadow:'0px 0px 6px 1px #4433cc'}}>
      <ToggleButton style={{borderRadius: '15px 0 0 15px'}} size='small' value="messages">Messages</ToggleButton>
      <ToggleButton style={{borderRadius: '0 15px 15px 0'}} size='small' value="events">Events</ToggleButton>
      </div>
      <Button value="events">Login</Button>
     
    </ToggleButtonGroup>
  );
}
