import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Container, ImageListItem } from '@mui/material';
import { Button } from '@mui/material';
import Lochitty from '../components/lochitty.png'
import Header from '../components/header';
import FAB from '../components/fab';
import EventCard from '../components/eventFetcher';
import eventData from '../components/mockData.json';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink,
} from 'react-router-dom';
import PostsListPage from './PostsListPage';
import PostFormPage from './PostFormPage';
import ShowPostPage from './ShowPostPage';
import ShowEvents from './EventRoute';
import AboutUsPage from './AboutUsPage';
import PostMessages from '../components/PostModal.js';
import PostEvent from '../components/EventModal.js';
import ProfileSettings from './ProfileSettings.js';

export default function Home() {
  return (
    <><Header />
    <Container>
    <Router>
        <div>
          <div >
    
            <Switch>
              <Route path="/posts/newMessage" component={PostMessages}/>
              <Route path="/posts/newEvent" component={PostEvent} />
              <Route path="/events" component={ShowEvents}>
                <Card variant="outlined" sx={{borderColor: 'transparent', borderRadius: 8, paddingTop: 5, paddingLeft: 5, paddingRight: 5}}>
                  <Box 
                    display="flex"
                    justifyContent="left"
                    alignItems="left"
                    minHeight="7vh" 
                    padding="1em"
                    >
                      <h1> <b>Events</b></h1>
                  </Box>
                </Card>
                
                <ShowEvents/><FAB /></Route>
              <Route path="/posts/:id" component={ShowPostPage} />
              <Route path="/profile-settings" component={ProfileSettings} />
              <Route path="/about-us" component={AboutUsPage} />
              <Route path="/" component={PostsListPage}><PostsListPage/><FAB/></Route>
            </Switch>
          </div>
        </div>
        </Router>

    </Container></>
  );
}


