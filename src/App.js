import logo from './logo.svg';
import './App.css';
import { Toolbar } from './Toolbar';
import React, { useEffect, useState } from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((element) => {
      if (element.classList.contains('hidden')) {
      }
      element.classList.add('hidden')
    })
    hiddenElements.forEach((element) => observer.observe(element))
  }, [])


  return (
    <div className='body'>

      <Toolbar/>
      <div className="hidden">
        <About />
      </div>

      <div className="hidden">
        <Experience></Experience>
      </div>

      <div className="hidden">
        <Projects></Projects>
      </div>

      <div className="hidden">
        <Contact name={name} setName={setName}
          email={email} setEmail={setEmail}
          message={message} setMessage={setMessage}></Contact>
      </div>

    </div>
  );
}

export default App;
