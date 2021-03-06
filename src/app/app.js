import React, {Component, Fragment} from 'react';

import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';
import ErrorBoundary from './error/error';
import Help from './help/help';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      show_help: false
    };
    this.showHelp = this.showHelp.bind(this);
    this.hideHelp = this.hideHelp.bind(this);
  }

  showHelp(){
    this.setState({show_help: true});
  }

  hideHelp(){
    this.setState({show_help: false});
  }

  render(){
    return (
      <Fragment>
        <Header showHelp={this.showHelp}/>
        <ErrorBoundary>
          <Body/>
        </ErrorBoundary>
        <Footer/>
        <Help show_help={this.state.show_help} hideHelp={this.hideHelp}/>
      </Fragment>
    );
  }
}
