import React, {Component} from 'react';

import request from 'superagent';


/**
 *  Search - A component that lists the search options, keyword field, and the search button.
 *  Parent Components - "Body"
 *
 *  @state {Object[]}   search_type_array  - array of search_type objects
 *         {Object[]}   library_array      - array of library objects
 *         {String}     keyword            - search keyword
 *         {String}     search_type        - search type(represented by a value)
 *         {String[]}   checked_library    - array of libraries to search(each represented by a value)
 *
 *  @props {Function} crawlLibrary    - Function used to crawl the library
 *
 */
export default class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      search_type_array: [],
      library_array:     [],
      keyword:           '',
      search_type:       '0',
      checked_library:   []
    };

    this.getSearchTypeList    = this.getSearchTypeList.bind(this);
    this.getLibraryList       = this.getLibraryList.bind(this);
    this.onTextChangeHandler  = this.onTextChangeHandler.bind(this);
    this.onRadioHandler       = this.onRadioHandler.bind(this);
    this.onCheckHandler       = this.onCheckHandler.bind(this);
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
  }


  /**
   * getSearchTypeList - sends GET request to retrieve an array of search types.
   *
   * @return {Object[]} - array of search_type Objects.
   */
  getSearchTypeList(){
    request
      .get('/rest/search_type')
      .end((err, res) => {
        if(err){
          console.log('superagent ERROR!');
          return
        }
        this.setState({search_type_array: res.body.result});
      });
  }


  /**
   * getLibraryList - sends GET request to retrieve an array of libraries.
   *
   * @return {Object[]} - array of library objects.
   */
  getLibraryList(){
    request
      .get('/rest/library')
      .end((err, res) => {
        if(err){
          console.log('superagent ERROR!');
          return
        }
        this.setState({library_array: res.body.result});
      });
  }


  /**
   * onTextChangeHandler - Sets the "keyword" state to the value in the keyword field
   *
   * @param  {Event Object} e - event object; in this case, the keyword input field
   * @return -
   */
  onTextChangeHandler(e){
    this.setState({keyword: e.target.value});
  }


  /**
   * onRadioHandler - Sets the "search_type" state to the value of the radio box
   *
   * @param  {Event object} e - event object; in this case, the radio box
   * @return -
   */
  onRadioHandler(e){
    this.setState({search_type: e.target.value});
  }


  /**
   * onCheckHandler - Adds the checked library key to the "checked_library" state
   *                  Removes the value if already checked
   *
   * @param  {Event Object} e - event object; in this case, the checkbox
   * @return -
   */
  onCheckHandler(e){
    const checkbox_value = e.target.value;
    let checked_library = this.state.checked_library;
    const library_index = checked_library.indexOf(checkbox_value);

    if (library_index === -1){
      checked_library.push(checkbox_value);
      checked_library.sort();
    } else {
      checked_library.splice(library_index, 1);
    }

    this.setState({checked_library: checked_library});
  }


  /**
   * onButtonClickHandler - Starts the search
   *
   * @param  {Event Object} e - event object; in this case, the search button.
   * @return -
   */
  onButtonClickHandler(){
    this.props.crawlLibrary(this.state.keyword, this.state.search_type, this.state.checked_library);
  }


  render(){

    this.getSearchTypeList();
    this.getLibraryList();

    // Array of search type element
    const search_type_ele_array = this.state.search_type_array.map((obj, idx) => {
      const radio_label = obj.type;
      const radio_value = obj.key;
      const radio_id = `id_radio_${obj.key}`;
      const is_checked = this.state.search_type == obj.key;

      return (
        <span key={idx}>
          <input id={radio_id} type="radio" name="type" value={radio_value} checked={is_checked} onChange={this.onRadioHandler}/>
          <label className="radio-label" htmlFor={radio_id}>{radio_label}</label>
        </span>
      );
    });

    // Array of library element
    const library_ele_array = this.state.library_array.map((obj, idx) => {
      const checkbox_value = obj.key;
      const checkbox_id = `id_check_${obj.key}`;
      const checkbox_label = obj.name_en;
      const is_checked = this.state.checked_library.includes(checkbox_value);

      return (
        <span key={idx}>
          <input id={checkbox_id} type="checkbox" name="library" value={checkbox_value} checked={is_checked} onChange={this.onCheckHandler}/>
          <label className="checkbox-label" htmlFor={checkbox_id}>{checkbox_label}</label>
        </span>
      );
    });

    const is_disabled = this.state.keyword.length === 0 || this.state.checked_library.length === 0; // disables search button when there are no keywords or no libraries have been checked.

    return (
      <div className="hero-image">
        <div className="search-container">

          <div className="input-container">
            <h1 className="input-title">Search for keyword:</h1>
            <input className="keyword-input-field" type="text" autoComplete="off" onChange={this.onTextChangeHandler}/>
          </div>

          <div className="input-container">
            <h2 className="input-title">Search with keyword as:</h2>
            {search_type_ele_array}
          </div>

          <div className="input-container">
            <h2 className="input-title">Search libraries in the following wards:</h2>
            {library_ele_array}
          </div>

          <button className="search-button" disabled={is_disabled} onClick={this.onButtonClickHandler}>SEARCH</button>

        </div>
      </div>
    );
  }
}
