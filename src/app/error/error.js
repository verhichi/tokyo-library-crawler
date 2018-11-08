import React, {Component} from 'react';

export default class Error extends Component{
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
          <pre>{this.state.info}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
