import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'UserContext';

import api from 'api';
import utils from 'utils';

const userAPI = api('users');

export const Login = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Get info from fields
    const userInfo = utils.createObjectFromFields(e.target.elements)

    // Try to find in database
    const response = await userAPI.login(userInfo);

    // If successful, setUser and redirect to /faq else display error
    if (response) {
      setUser(response);
      history.push('/faq')
    } else {
      setError('Email or Password is incorrect. Please try again.')
    }
  }

  return (
    <>
      <h2 className="heading">Login</h2>
      <form className="login-form flex flex--column" onSubmit={(e) => handleLogin(e)}>
        <label className="med-text" htmlFor="email">Email</label>
        <input className="input" id="email" type="email" />
        <label className="med-text" htmlFor="password">Password</label>
        <input className="input" id="password" type="password" />
        <button className="btn cta-btn" type="submit">Login</button>
      </form>
      <span className="error">{error}</span>
    </>
  )
}
