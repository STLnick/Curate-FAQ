import React from 'react';

export const Login = () => {
  return (
    <>
      <h2 className="heading">Login</h2>
      <form class="login-form flex flex--column">
        <label className="med-text" htmlFor="email">Email</label>
        <input className="input" id="email" type="email" />
        <label className="med-text" htmlFor="password">Password</label>
        <input className="input" id="password" type="password" />
        <button className="btn cta-btn" type="submit">Login</button>
      </form>
    </>
  )
}
