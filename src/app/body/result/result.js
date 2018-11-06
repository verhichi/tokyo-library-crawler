import React, {Component} from 'react';

export default class Result extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="result-table-container">
        <h1>Found: 8 result(s)</h1>
      </div>
    );
  }
}
