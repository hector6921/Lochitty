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

/*
deletePost = (event) => {
  fetch("/api/posts/", {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({content: this.state.content, title: this.state.title}),
  })
    .then(res => {
      if(res.ok) {
        return res.json()
      }

      throw new Error('Content validation');
    })
    .then(post => {
      this.setState({
        success: true,
      });
    })
    .catch(err => {
      this.setState({
        error: true,
      });
    });
}
*/

function Post({title, content, createdAt, id }) {
  return (
    <ThemeProvider theme={theme}>

      <Card className="p-5 d-flex border-bottom" sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gridTemplateAreas: `"title content delete"`, width: "100%", borderRadius: 4, marginBottom: 2, border: 0, boxShadow: 7 }}>
      <Box sx={{ gridArea: 'title'}}>
        <CardHeader
          sx={{fontSize: 2}}
          title={ title}
          subheader={ createdAt } 
        />
      </Box>
      
      <CardContent sx={{maxWidth:'25em'}}>

      <Box sx={{ gridArea: 'main'}}>
        
      <Typography sx={{fontSize: 20}}>
        { content }
        </Typography>

      </Box>
      </CardContent>
      
      <CardContent sx={{maxWidth:'25em'}}>
      <Box sx={{ gridArea: 'sidebar'}}>
        <IconButton style={{outline: 'none', position: 'absolute', left: '85%'}} aria-label="delete" color="primary">
            <DeleteOutlineRoundedIcon />
        </IconButton>
      </Box>


       
      </CardContent>
    </Card>
    </ThemeProvider>
  );
}

export default Post;