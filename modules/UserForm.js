import React from 'react'
import FormInput from './FormInput'

export default React.createClass({
  handleOnSubmit(e){
    // get data
    var data = {
      username: this.refs.username.state.value,
      password: this.refs.password.state.value
    }
    //build ajax with data
    console.log(data);
    e.preventDefault();
  },
  render() {
    return (
      <form>
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
      </form>
    )
  }
})
