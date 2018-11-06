import React, {Component} from 'react';

export default class Result extends Component{
  constructor(props){
    super(props);
  }

  render(){
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
