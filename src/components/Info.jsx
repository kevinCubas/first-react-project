import React from "react"

// 

export default function Info() {
  return (
      <header className="card-info">
          <img src="./assets/woman.png" alt="" className='photo'/>
          <h1 className="name">Laura Smith</h1>
          <h2 className="profession">Frontend Developer</h2>
          <a href="#" className="site">laurasmith.website</a>
          <div className="mail-section">
              <a href="mailto:" target="_blank" className="mail-button">
                <img src="./assets/Mail.svg" alt="" className="mail-icon"/> Email
              </a>
          </div>
      </header>
  )
}