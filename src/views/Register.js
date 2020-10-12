import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from 'UserContext';

import api from 'api';
import utils from 'utils';

const userAPI = api('users');

export const Register = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Get info from fields
    const userInfo = utils.createObjectFromFields(e.target.elements);

    // Using new FormData() for PHP
    let formData = new FormData();
    formData.append('email', userInfo.email)
    formData.append('password', userInfo.password)

    try {
      // Insert in database
      const response = await userAPI.create(formData);
      // If successful, setUser and redirect to /faq else display error
      setUser(response);
      history.push('/faq')
    } catch (err) {
      setError(err);
    }
  }

  return (
    <>
      <h2 className="heading">Sign Up</h2>
      <form className="login-form flex flex--column flex--align-center" onSubmit={(e) => handleRegister(e)}>
        <label className="med-text" htmlFor="email">Email</label>
        <input className="input" id="email" type="email" />
        <label className="med-text" htmlFor="password">Password</label>
        <input className="input" id="password" type="password" />
        <button className="btn cta-btn" type="submit">Register</button>
        <span className="sm-text">Already registered?</span>
        <Link className="sm-text text-link dark-text-link" to="/">Login</Link>
      </form>
      <span className="error">{error}</span>
    </>
  )
}
