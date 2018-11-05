import React, {Component} from 'react';

import Search from './search/search';
import Result from './result/result';

export default class Body extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <main>
        <Search/>
        <Result/>
      </main>
    );
  }
}
