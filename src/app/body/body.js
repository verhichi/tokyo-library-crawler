import React, {Component} from 'react';

import request from 'superagent';

import Search from './search/search';
import Result from './result/result';


/**
 * Body - A component containing the "Search" and "Result" Component.
 * @Parent Component - "App"
 *
 * @state {Object[]} crawl_result_array - array of search result object
 *        {Boolean}  is_crawling        - Boolean value that represents the current state of the web crawling
 *
 * @props -
 */
export default class Body extends Component{
  constructor(props){
    super(props);
    this.state = {
      crawl_result_array: [],
      is_crawling: false
    };
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
    // empty the array before crawling
    this.setState({
      crawl_result_array: [],
      is_crawling: true
    });

    let checked_library_count = 0;

    checked_library.forEach((library_key) => {
      // query object to send with request
      const query_obj = {
        keyword,
        search_type,
        library_key
      };

      request
        .get('/rest/crawl')
        .query({search_option: query_obj})
        .retry(0)
        .timeout(300000)
        .end((err, res) => {
          if(err){
            this.setState({is_crawling: false}, () => {throw new Error('Failed to search library successfully!')});
            return
          }
          this.setState({crawl_result_array: this.state.crawl_result_array.concat(res.body.result)});
          if(++checked_library_count === checked_library.length) this.setState({is_crawling: false});
        });
      });
    }

  render(){
    return (
      <main>
        <Search crawlLibrary={this.crawlLibrary} is_crawling={this.state.is_crawling}/>
        <Result crawl_result_array={this.state.crawl_result_array}/>
      </main>
    );
  }
}
