import React, {Component} from 'react';

export default class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header>
        <div>Tokyo Library Audio Crawler</div>
        <div className="show-help" onClick={this.props.showHelp}>HELP</div>
      </header>
    );
  }
}
