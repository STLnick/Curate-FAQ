import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div class="top-nav flex flex--align-center flex--justify-between">
      <h1 className="title">Nick's FAQs</h1>
      <Link className="btn outline-btn secondary-fill" to="/">Login</Link>
    </div>
  )
}
