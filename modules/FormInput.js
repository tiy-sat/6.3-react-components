import React from 'react'

export default React.createClass({
  handleInputChange(e) {
    // input validation
    // not enough characters
    this.setState({value: e.target.value})
  },
  render() {
    return (
      <input onChange={this.handleInputChange}
             className={"form__input--"+this.props.name}
             name={this.props.name}
             type={this.props.type}/>
    )
  }
})
