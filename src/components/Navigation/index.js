import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../components/Logo'
import './styles.css'

const Navigation = props => (
  <nav className="Navigation">
    <Logo className="Logo" />

    <ol className="NavigationList">
      <li className="NavigationItem">
        <NavLink exact to="/" className="NavigationLink">
          <span>Home</span>
        </NavLink>
      </li>

      {props.pages.map(page => (
        <li key={page.title} className="NavigationItem">
          <NavLink to={page.url} className="NavigationLink">
            <span>{page.title}</span>
          </NavLink>
        </li>
      ))}
    </ol>
  </nav>
)

export default Navigation
