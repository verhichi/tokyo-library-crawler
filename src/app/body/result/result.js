import React, {Component} from 'react';


/**
 * Result - Component that lists all the result acquired from the search as a table. Shows a "no result" message when there are 0 results.
 * Parent Components - "Body"
 *
 *  @state -
 *
 *  @props {Object[]} crawl_result_array - An array of the result of the search.
 */
export default class Result extends Component{
  constructor(props){
    super(props);
  }

  render(){

    // Creates an array of each row in the table using the search result.
    const search_result_ele_array = this.props.crawl_result_array.map((result, idx) => {
      return (
        <tr key={idx}>
          <td>{result.library}</td>
          <td><a href={result.link}>{result.title}</a></td>
          <td>{result.artist}</td>
        </tr>
      );
    });

    return (
      <div className="result-table-container">
        <h1>Found: 5 result(s)</h1>
        <table className="result-table">
          <thead>
            <th>Library</th>
            <th>Title</th>
            <th>Artist</th>
          </thead>
          <tbody>
            <tr>
              <td>TITLE1</td>
              <td><a href="#" target="_blank">Link1</a></td>
              <td>ARTIST NAME1</td>
            </tr>
            <tr>
              <td>TITLE2</td>
              <td><a href="#" target="_blank">Link2</a></td>
              <td>ARTIST NAME2</td>
            </tr>
            <tr>
              <td>TITLE3</td>
              <td><a href="#" target="_blank">Link3</a></td>
              <td>ARTIST NAME3</td>
            </tr>
            <tr>
              <td>TITLE4</td>
              <td><a href="#" target="_blank">Link4</a></td>
              <td>ARTIST NAME4</td>
            </tr>
            <tr>
              <td>TITLE5</td>
              <td><a href="#" target="_blank">Link5</a></td>
              <td>ARTIST NAME5</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
