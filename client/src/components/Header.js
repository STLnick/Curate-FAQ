import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div class="top-nav flex flex--align-center flex--justify-between">
      <h1 className="title">Nick's FAQs</h1>
      <div className="top-nav-right">
        <Link className="med-text text-link" to="/faq">FAQs</Link>
        <Link className="btn outline-btn secondary-fill" to="/">Login</Link>
      </div>
    </div>
  )
}
