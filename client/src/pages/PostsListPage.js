import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';


class PostsListPage extends React.Component {
  state = {
    posts: [`<Post props={'hello',"hellsoo",1} key='Name' />`],
    loading: true,
  }

  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        console.log(posts)
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <Post {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <Card variant="outlined" sx={{borderColor: 'transparent', borderRadius: 8, paddingTop: 5, paddingLeft: 5, paddingRight: 5}}>
        <Box 
              display="flex"
              justifyContent="left"
              alignItems="left"
              minHeight="7vh" 
              padding="1em"
              >
                <h1> <b>Messages</b></h1>
                
        </Box>
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            { this.state.posts }
          </div>
        </div>
      </Card>
    );
  }
}

export default PostsListPage;