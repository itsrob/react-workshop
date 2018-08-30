import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../components/Logo'
import './styles.css'

const Navigation = props => (
  <nav className="Navigation">
    <Logo className="Logo" />
    <ol className="NavigationList">
      <div>
        <NavLink exact to="/" className="NavigationLink">
          <li className="NavigationItem">
            <span>Home</span>
          </li>
        </NavLink>
      </div>

      {props.pages.map(page => (
        <div key={page.title}>
          <NavLink to={page.url} className="NavigationLink">
            <li className="NavigationItem">
              <span>{page.title}</span>
            </li>
          </NavLink>
        </div>
    ))}

    </ol>
  </nav>
)

export default Navigation
