import React, {Component} from 'react';

export default class ErrorBoundary extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: false,
      info: null
    };
  }

  componentDidCatch(error, info){
    this.setState({error: true, info: info});
  }

  render(){
    if(this.state.error){
      return (
        <div className="error-container">
          <h1>There seems to have been an error in the application.</h1>
          <h1>Please Refresh the page and try again. If the problem persists, contact me :)</h1>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
