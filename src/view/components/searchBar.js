import React, { Component } from 'react';

export class searchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term : ''};
  }

  onChangeHandler = (event) => {
    this.setState({term: event.target.value});
    this.props.onInputChange(event.target.value);
  }

  render() {
    return (
      <div className='search-bar'>
        <input type="text"
          value={this.state.term}
          onChange={this.onChangeHandler}
          placeholder='Search' />        
      </div>
    );
  }
}

export default searchBar;
