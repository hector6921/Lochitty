import React from 'react';
import { Redirect } from 'react-router-dom';
import '../components/fancyButtons.css';

class PostFormEvent extends React.Component {
    state = {
    error: false,
    success: false,
    content: '',
    title: '',
  }

  contentChanged = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  titleChanged = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  savePost = (event) => {
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

  render() {
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div style={{lineHeight:'2em', position:'fixed', width: '100%', left:'0', top:'0', textAlign:'center', height: '4em', borderRadius:'1em'}} className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
          <div className="col-10 col-md-8 col-lg-7" style={{ alignItems:'center', height: '25em', width: '25em' }}>
            <div style={{padding:'200'}}>
              { errorMessage }
            </div>
          <div>
            <div newPost style={{ paddingBottom: '1em', fontSize: '2em', fontWeight: 'bolder', whiteSpace: 'nowrap' }}>
              Compose Event
            </div>
            <div inputs style={{ textAlign: 'center', paddingLeft: '2em' }}>
              <input style={{ width: '20em' }}
                type="text"
                placeholder="Title..."
                value={this.state.title}
                className="form-control mr-3 rounded"
                onChange={this.titleChanged} />
              <div style={{ padding: '0.5em' }}></div>
              <input style={{ height: '10em', width: '20em' }}
                type="text"
                placeholder="Content..."
                value={this.state.content}
                className="form-control mr-3 rounded"
                onChange={this.contentChanged} />
              <div style={{padding: '0.5em' }}></div>
              <button style={{ position:'relative', left:'35%'}} className="btn btn-fancy" onClick={this.savePost}>Post Message</button>
            </div>
          </div>
        </div>
    );
  }
}

export default PostFormEvent;