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
    };
    this.search_type_array = this.getSearchTypeList();
    this.library_array = this.getLibraryList();
  }


  /**
   * getSearchTypeList - sends GET request to retrieve an array of search types.
   *
   * @return {Object[]} - array of search_type Objects.
   */
  getSearchTypeList(){
    return [{'key': '0', 'type': 'Title'}, {'key': '1', 'type': 'Artist'}];
  }


  /**
   * getLibraryList - sends GET request to retrieve an array of libraries.
   *
   * @return {Object[]} - array of library objects.
   */
  getLibraryList(){
    return [{'key': '0', 'name_en': 'Chuuou'}, {'key': '1', 'name_en': 'Katsushika'}];
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
    const checked_library = this.state.checked_library;
    const library_index = checked_library.indexOf(checkbox_value);

    if (library_index === -1){
      this.setState({checked_library: checked_library.push(checkbox_value).sort()});
    } else {
      this.setState({checked_library: checked_library.splice(library_index, 1)});
    }
  }


  /**
   * onButtonClickHandler - Starts the search
   *
   * @param  {Event Object} e - event object; in this case, the search button.
   * @return -
   */
  onButtonClickHandler(e){
    this.props.crawlLibrary(this.state.keyword, this.state.search_type, this.state.checked_library);
  }


  render(){
    // Array of search type element
    const search_type_ele_array = this.search_type_array.map((obj, idx) => {
      const radio_label = obj.type;
      const radio_value = obj.key;
      const radio_id    = `id_radio_${obj.key}`;
      const is_checked  = this.state.search_type == obj.key;

      return (
        <span key={idx}>
          <input id={radio_id} type="radio" name="type" value={radio_value} checked={is_checked} onChange={this.onRadioHandler}/>
          <label className="radio-label" htmlFor={radio_id}>{radio_label}</label>
        </span>
      );
    });

    // Array of library element
    const library_ele_array = this.library_array.map((obj, idx) => {
      const checkbox_value = obj.key;
      const checkbox_id    = `id_check_${obj.key}`;
      const checkbox_label = obj.name_en;
      const is_checked     = this.state.checked_library.includes(checkbox_id);

      return (
        <span key={idx}>
          <input id={checkbox_id} type="checkbox" value={checkbox_value} checked={is_checked} onClick={this.onCheckHandler}/>
          <label className="checkbox-label" htmlFor={checkbox_id}>{checkbox_label}</label>
        </span>
      );
    });

    const is_disabled = this.state.keyword.length === 0 || this.state.checked_library.length === 0; // disables search button when there are no keywords or no libraries have been checked.

    return (
      <div className="hero-image">
        <div className="search-container">

          <div className="input-container">
            <h1>Search for keyword:</h1>
            <input className="keyword-input-field" type="text" autoComplete="off"/>
          </div>

          <div className="input-container">
            <h2>Search with keyword as:</h2>
            {search_type_ele_array}
          </div>

          <div className="input-container">
            <h2>Search libraries in the followin wards:</h2>
            {library_ele_array}
          </div>

          <button className="search-button" disabled={is_disabled} onClick={this.onButtonClickHandler}>SEARCH</button>

        </div>
      </div>
    );
  }
}
