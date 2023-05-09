import React from 'react'
import "./NavBar.css"
import "../uni.css"
import { NavLink } from 'react-router-dom';

const navItems=["Home","Color Picker","Box Shadow","Gradient Generator"];

function NavBar() {
  return (
    <nav className="NavBar">
        <NavItems />
    </nav>
  )
}

function NavItems()
{
    return (
        <ul className="Nav-Items flex-row-evenly">
        {
            navItems.map(val=>
                (
                    <Item title={val} key={val} />
                ))
        }
        </ul>
    )
}

function Item(props)
{
    return (
        <NavLink className="Nav-Item" activeClassName="active" to={props.title}>{props.title}</NavLink>
    )
}

export default NavBar