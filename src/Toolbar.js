import React from 'react'
import { Link } from 'react-router-dom'

export const Toolbar = () => {

    return (
        <nav className='header'>
            <ul className='toolbar'>
                <li className='home'>
                   
                    <a href='Home'>Home</a>
                </li>

                <li className='other'>
                    <a href='About'>About</a>
                </li>

                <li className='other'>
                    <a href='Experience'>Experience</a>
                </li>

                <li className='other'>
                    <a href='Projects'>Projects</a>
                </li>

                <li className='other'>
                    <a href='Contact'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}
