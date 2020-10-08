import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from 'UserContext';

export const Header = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    history.push('/');
  }

  return (
    <div className="top-nav flex flex--align-center flex--justify-between">
      <h1 className="title">Nick's FAQs</h1>
      <div className="top-nav-right">
        <Link className="med-text text-link" to="/faq">FAQs</Link>
        {user
          ? <button
            className="btn outline-btn secondary-fill"
            onClick={handleLogout}
          >
            Logout
          </button>
          : <Link className="btn outline-btn secondary-fill" to="/">Login</Link>}
      </div>
    </div>
  )
}
