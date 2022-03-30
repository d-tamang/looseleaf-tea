import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      results: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
    if (e.target.value === '') {
      this.setState({ results: [] });
    }
    else {
      let filteredTeas = []
      this.props.teas.map(tea => {
        if (tea.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          filteredTeas.push(tea)
        }
      });
      this.setState({ results: filteredTeas });
    }
  }

  render() {
    let filteredResults;
      if (this.state.results.length > 0) {
        filteredResults = this.state.results.map(tea => (
          <div className="search-results-box">
            <div><Link to={`/tea/${tea.id}`}><img id="search-tea-img" src={tea.image}/></Link></div>
            <div id="search-tea-name">{tea.name}</div>
          </div>
        ))
      } else if (this.state.searchField !== '') {
        filteredResults = (
          <div id="no-results">No results found</div>
        )
      }

    return (
      <div>
        <div id="search-header">Search</div>
        <div className="search-input">
          <div><img id="search-field-icon" src="images/searchicon.png" /></div>
          <div><input type="search" value={this.state.searchInput} placeholder="Search our store" onChange={this.handleChange}></input></div>
        </div>
        <div>{filteredResults}</div>
      </div>
    )
  }
}

export default SearchBar;