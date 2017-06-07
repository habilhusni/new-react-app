import React from 'react'

class Login extends React.Component {

  render() {

    return (
      <div>

        <div className="field">
          <label className="label">Name</label>
          <p className="control">
            <input className="input" type="text" placeholder="Text input"></input>
          </p>
        </div>

        <div className="field">
          <label className="label">Username</label>
          <p className="control">
            <input className="input" type="text" placeholder="Text input"></input>
          </p>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <p className="control">
            <input className="input" type="text" placeholder="Email input"></input>
          </p>
        </div>

        <div className="field is-grouped">
          <p className="control">
            <button className="button is-primary">Submit</button>
          </p>
          <p className="control">
            <button className="button">Cancel</button>
          </p>
        </div>

      </div>
    )

  }
  
}

export default Login
