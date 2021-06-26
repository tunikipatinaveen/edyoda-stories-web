import React, { Component, useState } from 'react';
import './navbar.css'

const Navbar = (props) => {
    const[category, setCategory]= useState(false)

    const filters = props.filters;
    return (<div className='navbar fixed-top'>
        <div>
            <a href='#' className='logo'>EDYODA</a>
            <p className='logo-stories'>stories</p>
        </div>
        <div className='categories'>
            <a onClick = {()=> setCategory(!category)}>Explore Categories<i class="fas fa-chevron-down"></i></a>
            <p>EdYoda is free learning and knowledge<br />sharing platform for techies</p>
            {category ? <div className='category-container'>
                {filters.map((filter) => <a>{filter.title}</a>)}
                <div></div>        
            </div> : ''}
        </div>
        <button className='navbar-btn'>Go to Main Website</button>
    </div>);
}

export default Navbar;