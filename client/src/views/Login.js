import React from 'react';

export const Login = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" />
      <button type="submit">Login</button>
    </form>
  )
}
