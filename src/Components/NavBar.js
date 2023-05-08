import React from 'react'
import "./NavBar.css"
import "../uni.css"
import { Link } from 'react-router-dom';

const navItems=["Home","Color Picker","Box Shadow","Gradient Generator",];

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
                    <Item title={val} />
                ))
        }
        </ul>
    )
}

function Item(props)
{
    return (
        <Link className="Nav-Item" to={props.title}>{props.title}</Link>
    )
}

export default NavBar