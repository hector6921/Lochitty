import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GitHubIcon from '@material-ui/icons/GitHub';


const actions = [
  { icon: <EventRoundedIcon style={{ fill: '#000000' }} />, name: 'Event', link: '/posts/newEvent'},
  { icon: <ForumRoundedIcon style={{ fill: '#000000' }} />, name: 'Message', link: '/posts/newMessage'},
];

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



export default function BasicSpeedDial() {


  return (
    <ThemeProvider theme={theme}>

    <Box sx={{outline: 'none', position: 'fixed', bottom: 0, right: 0, bcolor: 'linear-gradient(to right bottom, #430089, #82ffa1)', height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{outline: 'none', position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.link}
          />
        ))}
      </SpeedDial>
    </Box>

    </ThemeProvider>
  );
}