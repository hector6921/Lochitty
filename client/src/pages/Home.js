import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ImageListItem } from '@mui/material';
import { Button } from '@mui/material';
import Lochitty from '../components/lochitty.png'
import Header from '../components/header';
import FAB from '../components/fab';

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
import AboutUsPage from './AboutUsPage';

export default function Home() {
  return (
    
    <><Header />

    <Router>
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        <Switch>
          <Route path="/posts/new" component={PostFormPage} />
          <Route path="/posts/:id" component={ShowPostPage} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/" component={PostsListPage} />
        </Switch>
      </div>
    </div>
    </Router>

    <FAB />
</>
  );
}


class App extends React.Component {
    render() {
      return (
          <></>
      );
    }
  }