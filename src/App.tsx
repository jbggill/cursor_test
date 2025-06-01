import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h1>MyApp</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main className="main">
        <section className="hero">
          <h1>Welcome to MyApp</h1>
          <p>Your gateway to amazing experiences</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="features" id="features">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Easy to Use</h3>
              <p>Intuitive interface designed for the best user experience</p>
            </div>
            <div className="feature-card">
              <h3>Powerful Tools</h3>
              <p>Advanced features to help you achieve more</p>
            </div>
            <div className="feature-card">
              <h3>Fast & Reliable</h3>
              <p>Built for performance and dependability</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
