import React from 'react'
import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'
import history from "../../data/history.json"
import styles from "./Experience.module.css"
export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>
                Experience
            </h2>
            <div>
                <div>{
                    skills.map((skills, id) => {
                        return <div key={id}>
                            <div><img src={getImageUrl(skills.imageSrc)} alt={skills.title} />
                                <p>{skills.title}</p>
                            </div>
                        </div>

                    }
                    )
                }
                </div>
                <ul>
                    {history.map((historyItem, id) => {
                        return <li key={id}>
                            <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`}/>
                            <div>
                                <h3>
                                    {`${historyItem.role}, ${historyItem.organisation}`}
                                </h3>
                                <p>
                                {`${historyItem.startDate} - ${historyItem.endDate}`}
                                </p>
                                <ul>
                                    {historyItem.experiences.map((experiences, id) => {
                                        return <li key={id}>
                                            {experiences}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    }
                    )
                    }
                </ul>
            </div>

        </section>
    )
}
