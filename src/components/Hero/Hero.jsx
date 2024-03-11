import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";


export const Hero = () => { 

    return (
       <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey, I'm Ronald</h1>
                <p className={styles.description}>I'm a Software Developer with experience in mobile applications and web applications. Reach out if you'd like to learn more!</p>
                <a href ="mailto:rferna214@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/image1.png")} alt="Image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
       </section>
    );
};