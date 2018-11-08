import React, {Component} from 'react';

export default class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header>
        <h1>Tokyo Library Audio Crawler</h1>
        <h1 className="show-help" onClick={this.props.showHelp}>HELP</h1>
      </header>
    );
  }
}
