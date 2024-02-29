import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage1.png")} 
            alt="Me sitting on laptop"
            className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} 
                    alt="Server Icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Full Stack Developer</h3>
                        <p>I'm a full stack developer with experience 
                            in building responsive and optimized sites and APIs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} 
                    alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Mobile Developer</h3>
                        <p>I have experience developing 
                            immersive and user-friendly applications 
                            with stunning designs </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} 
                    alt="UI Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages
                            and have created design systems as well</p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    )
}
