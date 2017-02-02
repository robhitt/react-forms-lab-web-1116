const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    // prop onSubmit, called when form is submitted
    // index.js
    // <h1><pre>LoginForm</pre></h1>
    // <LoginForm onSubmit={login} />

    this.state = {
      username: "",
      password: ""
    };

    this.userNameHandler = this.userNameHandler.bind(this)
    this.passwordHandler = this.passwordHandler.bind(this)
    this.fieldsNotEmptyHandler = this.fieldsNotEmptyHandler.bind(this)
  }

  userNameHandler(event){
    // let name = event.target.value
    console.log(event.target.value)
    this.setState(
      {username: event.target.value}
    )
  }

  passwordHandler(event){
    // let name = event.target.value
    console.log(event.target.value)
    this.setState(
      {password: event.target.value}
    )
  }

  fieldsNotEmptyHandler(event){
    event.preventDefault()
    if (this.state.username.length !== 0 && this.state.password.length !== 0) {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.fieldsNotEmptyHandler}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.userNameHandler} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.passwordHandler} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
