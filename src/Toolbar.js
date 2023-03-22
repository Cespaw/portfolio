import React from 'react'
import { Link } from 'react-router-dom'

export const Toolbar = () => {

    function scrollToSection(section){
        const element = document.getElementById(section);
        element.scrollIntoView()
    }

    return (
        <nav className='header'>
            <ul className='toolbar'>
                <li className='home'>
                    <a>Home</a>
                </li>

                <li className='other'>
                    <a onClick={() => scrollToSection('About')}>About</a>
                </li>

                <li className='other'>
                    <a onClick={() => scrollToSection('Experience')}>Experience</a>
                </li>

                <li className='other'>
                    <a onClick={() => scrollToSection('Projects')}>Projects</a>
                </li>

                <li className='other'>
                    <a onClick={() => scrollToSection('Contact')}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}
