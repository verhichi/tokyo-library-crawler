import React, {Component} from 'react';

import request from 'superagent';

import Search from './search/search';
import Result from './result/result';


/**
 * Body - A component containing the "Search" and "Result" Component.
 * @Parent Component - "App"
 *
 * @state {Object[]} crawl_result_array - array of search result object
 *
 * @props -
 */
export default class Body extends Component{
  constructor(props){
    super(props);
    this.state = {crawl_result_array: []};
    this.crawlLibrary = this.crawlLibrary.bind(this);
  }


  /**
   * crawlLibrary - Sends request to server to scrape the web and receives the results. Then sets the result as the crawl_result_array state.
   *
   * @param  {String}   keyword         keyword used to search with
   * @param  {String}   search_type     value that represents the search_type(title/artist)
   * @param  {String[]} checked_library array of values that represents the library in which to search in
   * @return -          no return value
   */
  crawlLibrary(keyword, search_type, checked_library){
    // query object to send with request
    const query_obj = {
      keyword,
      search_type,
      checked_library
    };

    // Send GET request to server via /crawl uri
    // Receive search result
    request
      .get('/rest/crawl')
      .query({search_option: query_obj})
      .end((err, res) => {
        if(err){
          console.log('Superagent ERROR');
          return
        }
        this.setState({crawl_result_array: res.body.result});
      });
  }


  render(){
    return (
      <main>
        <Search crawlLibrary={this.crawlLibrary}/>
        <Result crawl_result_array={this.state.crawl_result_array}/>
      </main>
    );
  }
}
