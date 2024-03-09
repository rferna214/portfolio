import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer>
        <div>
            <h2>Contact</h2>
            <p>
                Feel free to reach out!
            </p>
        </div>
        <ul>
            <li>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:Rferna214@gmail.com">Rferna214@gmail.com</a>
            </li>
            <li>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/rferna214">linkedin.com/Rferna214</a>
            </li>
            <li>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                <a href="https://www.github.com/rferna214">github.com/Rferna214</a>
            </li>
        </ul>
    </footer>
  )
}
