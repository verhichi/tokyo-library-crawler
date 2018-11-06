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

          <div className="input-container">
            <h2>Search with keyword as:</h2>
            <span>
              <input type="radio"/>
              <label className="radio-label">Title</label>
            </span>
            <span>
              <input type="radio"/>
              <label className="radio-label">Artist</label>
            </span>
          </div>

        </div>
      </div>
    );
  }
}
