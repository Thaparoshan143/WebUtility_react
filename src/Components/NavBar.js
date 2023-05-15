import React from 'react'
import "./NavBar.css"
import "../uni.css"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const navItems=["Home","Color Picker","Box Shadow","Gradient Generator"];
const navSubItems=[[],["Random","Complementry"],[],["Linear","Circular","Conic"]];

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
            navItems.map((val,ind)=>
                (
                    <Item title={val} ind={ind} key={val} />
                ))
        }
        </ul>
    )
}

function Item(props)
{
    const [isHover,setIsHover]=useState(false);

    function showSubItems()
    {
        if(!isHover)
        setIsHover(true);
    }

    function closeSubItems()
    {
        if(isHover)
        setIsHover(false);
    }

    return (
        <NavLink className="Nav-Item flex-column-evenly" to={props.title} onMouseOver={showSubItems} onMouseLeave={closeSubItems}>
            <span className="Item">{props.title}</span>
            {isHover?(navSubItems[props.ind].length ? navSubItems[props.ind].map((val)=>{
                return <NavLink className="Sub-Item Item" to={val}>{val}</NavLink>
            }):""):""}
            </NavLink>
    )
}

export default NavBar