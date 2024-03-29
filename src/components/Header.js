import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = ()=>(
    <header>
    <h1>Expensify-Application</h1>
    <NavLink to="/" activeClassName='is-active' exact={true}> Dashboard </NavLink>
    <NavLink to="/create" activeClassName='is-active'> Create Expense </NavLink>

    <NavLink to="/help" activeClassName='is-active'> Help Expense  </NavLink>
    </header>  
  );
  export default Header;

  // import { NavLink } from 'react-router-dom';