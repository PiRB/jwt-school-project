import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <h1 className='left-menu__title'>{process.env.REACT_APP_APP_NAME}</h1>
      <ul className='left-menu__link-list'>
        <span>{'=>'} <Link to="/">Home</Link></span>
        <span>{'=>'} <Link to="/login">Login</Link></span>
      </ul>
    </div>
  );
}

export default LeftMenu;
