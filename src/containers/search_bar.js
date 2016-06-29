import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchvideos } from '../actions/index'

export default class SearchBar extends Component{
    constructor(props){
    super(props)

    this.state = {
      term: ''
    }
  }
  handleInput(e){
    this.setState({term: e.target.value})
  }
  handleFormSubmit(e){
    e.preventDefault()

    this.props.fetchvideos(this.state.term)
    this.setState({term: ''})
  }
  render(){
    return (
      <form
      className="input-group"
      onSubmit={this.handleFormSubmit.bind(this)}
      >
        <input
        className="form-control"
        placeholder="Type a city here ..."
        value={this.state.term}
        onChange={this.handleInput.bind(this)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }

}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchvideos }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
