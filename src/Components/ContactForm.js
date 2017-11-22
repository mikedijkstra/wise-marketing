import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      body: '',
      formSuccess: false,
      formError: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, body } = this.state
    const self = this

    fetch("/contact", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, body: body })
    }).then(function(response) {
      return response.json()
    })
    .then(function(body) {
      if (body.ok) {
        self.setState({ formSuccess: true, formError: false })
      } else {
        self.setState({ formSuccess: false, formError: true })
      }
    })
  }

  resetForm(event) {
    this.setState({ formSuccess: false, formError: false })
  }

  render() {
    const { formSuccess, formError, name, email, body } = this.state
    if (formSuccess) {
      return(
        <div className="form-message">
          <h4>Thanks! We'll get in touch soon.</h4>
          <Link to="/" className="btn">Return home</Link>
        </div>
      )
    } else if (formError) {
      return(
        <div className="form-message">
          <h4>There was an error submitting the form</h4>
          <button className="btn" onClick={this.resetForm}>Try again</button>
        </div>
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              required="required"
              value={name}
              onChange={this.handleChange} />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              required="required"
              value={email}
              onChange={this.handleChange} />
          </label>

          <label>
            <textarea name="body" value={body} onChange={this.handleChange} />
          </label>

          <button className="btn" type="submit">Submit</button>
        </form>
      )
    }
  }
}

export default ContactForm;