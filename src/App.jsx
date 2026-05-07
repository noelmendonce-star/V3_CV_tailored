import { useState, useEffect } from 'react'
import cv from './data/cv.js'
import ThemeToggle from './components/ThemeToggle.jsx'
import Header from './components/Header.jsx'
import Summary from './components/Summary.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <div className="cv-container">
        <Header personal={cv.personal} />
        <main id="main-content" className="cv-main">
          <Summary summary={cv.summary} />
          <Experience experience={cv.experience} />
          <Education education={cv.education} />
          <Skills skills={cv.skills} />
          <Projects projects={cv.projects} />
        </main>
      </div>
    </>
  )
}
