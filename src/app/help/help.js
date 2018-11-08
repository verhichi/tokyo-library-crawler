import React, {Component, Fragment} from 'react';


export default class Help extends Component{
  constructor(){
    super(props);
  }

  render(){
    if(this.props.show_help){
      return (
        <div className="help-overlay">
          <div className="help-container">
            <div className="close-help" onClick={this.props.hideHelp}>CLOSE</div>
            <div className="help-content">
              <h1>What is this?</h1>
              <h4>This is a web crawling application that searches libraries in Tokyo for audio media(CDs). At this moment, only a single instance of the web crawling logic can be run at a time. So whenever someone is using it, you will not be able to search until he/she is done with their search.</h4>
              <h4>The front-end is made with React.js and the back-end is made with node.js(Express).</h4>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
