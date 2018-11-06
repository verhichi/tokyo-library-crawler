import React, {Component, Fragment} from 'react';

import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Fragment>
        <Header/>
        <Body/>
        <Footer/>
      </Fragment>
    );
  }
}
