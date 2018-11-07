import React, {Component} from 'react';


/**
 * Result - Component that lists all the result acquired from the search as a table. Shows a "no result" message when there are 0 results.
 * Parent Components - "Body"
 *
 *  @state -
 *
 *  @props {Object[]} crawl_result_array - An array of the result of the search.
 *         {Boolean}  is_crawling        - Boolean value that represents the current state of the web crawling.
 */
export default class Result extends Component{
  constructor(props){
    super(props);
  }

  render(){

    // Number of results
    const crawl_result_count = this.props.crawl_result_array.length;

    if(this.state.is_crawling){
      const loading_symbol_ele = <div className="loading-symbol"></div>;
    } else {
      const loading_symbol_ele = null;
    }

    // Creates an array of each row in the table using the search result.
    const search_result_ele_array = this.props.crawl_result_array.map((result, idx) => {
      return (
        <tr key={idx}>
          <td>{result.library}</td>
          <td><a href={result.link} target="_blank">{result.title}</a></td>
          <td>{result.artist}</td>
        </tr>
      );
    });


    // Show "no result" message if there are no results
    // Show result table if there are more than 1 result(s)
    if (crawl_result_count === 0){

      return (
        <div className="result-table-container">
          <div className="no-result-container">
            <h1>Your search returned 0 results</h1>
            <h2>...or maybe you just haven't searched yet</h2>
          </div>
        </div>
      );

    } else {

      return (
        <div className="result-table-container">
          <div class="result-title">
            <h1>Found: {crawl_result_count} result(s)</h1>
            {loading_symbol_ele}
          </div>
          <table className="result-table">
            <thead>
              <th>Library</th>
              <th>Title</th>
              <th>Artist</th>
            </thead>
            <tbody>
              {search_result_ele_array}
            </tbody>
          </table>
        </div>
      );

    }

  }
}
