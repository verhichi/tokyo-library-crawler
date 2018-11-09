import React, {Component, Fragment} from 'react';


export default class Help extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.show_help){
      return (
        <div className="help-overlay">
          <div className="help-container">
            <div className="close-help" onClick={this.props.hideHelp}>CLOSE</div>
            <div className="help-content">
              <div className="help-main-title">HELP</div>
              <div className="help-section-container">
                <div className="help-section-title">What even is this?</div>
                <div className="help-section-text">This is a web application that searches libraries in Tokyo for audio media(CD).</div>
              </div>
              <div className="help-section-container">
                <div className="help-section-title">How do I use this?</div>
                <div className="help-section-text">
                  <ol>
                    <li>Input keyword that you want to search with.</li>
                    <li>Input whether you want to search the keyword as the title or the aritst.</li>
                    <li>Check which wards you want to search in.</li>
                    <li>Click the Search button and wait.</li>
                    <li>???</li>
                    <li>PROFIT!</li>
                  </ol>
                </div>
              </div>
              <div className="help-section-container">
                <div className="help-section-title">Warnings</div>
                <div className="help-section-text">
                  <ul>
                    <li>Only a single instance can be run at a time; in other words, if another user is in the middle of his/her search, you will have to wait for his/her search to end before you can start your own.</li>
                    <li>Each library gets 5 minutes before it times out.</li>
                    <li>This website is designed only for PC.</li>
                    <li>This website is designed to be used by chrome, firefox, safari, and edge(NOT INTERNET EXPLORER).</li>
                  </ul>
                </div>
              </div>
              <div className="help-section-container">
                <div className="help-section-title">What did you use to make this?</div>
                <div className="help-section-text">The front-end is made with React.js and the back-end is made with node.js(express).</div>
              </div>
              <div className="help-section-container">
                <div className="help-section-title">How long did this take to make?</div>
                <div className="help-section-text">About a week? If you want to see the process, check out my github.</div>
              </div>
              <div className="help-section-container">
                <div className="help-section-title">Why did you make this?</div>
                <div className="help-section-text">I was personally asked by a friend if I could somehow facilitate his library expeditions to find audio media. So I made this for him.</div>
              </div>
              <div className="help-section-container">
                <div className="help-section-title">Any last words?</div>
                <div className="help-section-text">I understand that there is a lot of room for improvement(and features that need to be fixed) but because this is just a personal project that I made for fun, I'm not gonna take my time to fix it(unless requested by my friend). So if there is a problem...just deal with it.</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
