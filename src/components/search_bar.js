import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }
  handleInputChange(term){
    this.setState({term})
    this.props.onSeachTermChange(term)
  }

  render(){
    return(
      <div>
        <input className="form-control"
        value={this.state.term}
        onChange={e => this.handleInputChange(e.target.value)} />
      </div>
    )
  }
}

export default SearchBar
