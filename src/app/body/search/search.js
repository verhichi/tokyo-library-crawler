import React, {Component} from 'react';


/**
 *  Search - A component that lists the search options, keyword field, and the search button.
 *  Parent Components - "Body"
 *
 *  @state {String}   keyword         - search keyword
 *         {String}   search_type     - search type(represented by a value)
 *         {String[]} checked_library - array of libraries to search(each represented by a value)
 *
 *  @props {Function} crawlLibrary    - Function used to crawl the library
 *
 */
export default class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      keyword:         '',
      search_type:     '0',
      checked_library: []
    }
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

          <div className="input-container">
            <h2>Search libraries in the followin wards:</h2>
            <span>
              <input type="checkbox"/>
              <label className="checkbox-label">Ward1</label>
            </span>
            <span>
              <input type="checkbox"/>
              <label className="checkbox-label">Ward2</label>
            </span>
            <span>
              <input type="checkbox"/>
              <label className="checkbox-label">Ward3</label>
            </span>
            <span>
              <input type="checkbox"/>
              <label className="checkbox-label">Ward4</label>
            </span>
          </div>

          <button className="search-button">SEARCH</button>

        </div>
      </div>
    );
  }
}
