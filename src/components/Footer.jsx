import React from "react"

export default function Footer() {
  return (
      <footer>
          <section className="socialMedia">
              <a href="https://twitter.com/explore" target={'_blank'}>
              <img className="socialIcons" src="./assets/Twitter-icon.svg"/>
              </a>
              <a href="https://pt-br.facebook.com/" target={'_blank'}>
              <img className="socialIcons" src="./assets/Facebook-icon.svg"/>
              </a>
              <a href="https://www.instagram.com/" target={'_blank'}>
              <img className="socialIcons" src="./assets/Instagram-icon.svg"/>
              </a>
              <a href="https://br.linkedin.com/" target={'_blank'}>
              <img className="socialIcons" src="./assets/Linkedin-icon.svg"/>
              </a>
              <a href="https://github.com/" target={'_blank'}>
              <img className="socialIcons" src="./assets/GitHub-icon.svg"/>
              </a>
          </section>
      </footer>
  )
}