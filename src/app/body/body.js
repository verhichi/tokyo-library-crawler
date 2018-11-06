import React, {Component} from 'react';

import Search from './search/search';
import Result from './result/result';

export default class Body extends Component{
  constructor(props){
    super(props);
    this.state = {crawl_result_array: []};
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
