import React, {Component} from 'react';

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
    const response = [{lib: "lib1", title: "title1", link: "www.google.com", artist: "artist1"}, {lib: "lib2", title: "title2", link: "www.yahoo.com", artist: "artist2"}];
    this.setState({crawl_result_array: response});
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
