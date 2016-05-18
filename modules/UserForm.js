import React from 'react'
import FormInput from './FormInput'

export default React.createClass({
  /* // getDefaultProps(){
  //   return {
  //     name: "default"
  //   }
  // },
  // getDefaultProps */
  componentWillMount(){
    this.setState({errors: ""});
  },
  handleOnSubmit(e){
    // get data
    var data = {
      username: this.refs.username.state.value,
      password: this.refs.password.state.value
    }

    if(data.username.length < 4){
      this.setState({errors: "Username must be at least 4 characters!"});
    }

    //build ajax with data
    console.log(data);
    e.preventDefault();
  },
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h2>Here's a form component</h2>
        <FormInput name="username"
                   type="text"
                   ref="username"
        />
        <FormInput name="password"
                   type="password"
                   ref="password"
        />
        <input type="submit" />
        <h3>errors: {this.state.errors}</h3>
      </form>
    )
  }
})
