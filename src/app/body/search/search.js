import React, {Component} from 'react';

export default class Search extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="hero-image">
        <div className="search-container">

          <div className="input-container">
            <h1>Search for keyword:</h1>
            <input className="keyword-input-field" type="text" autoComplete="off"/>
          </div>

        </div>
      </div>
    );
  }
}
