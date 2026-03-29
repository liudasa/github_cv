import projects from '../data/projects.json'
import styles from './Projects.module.css'

function Projects() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.pageTitle}>Projects</h1>
      <p className={styles.pageDescription}>
        以下是我参与的主要项目。
      </p>
      <div className={styles.grid}>
        {projects.map((project) => {
          const content = (
            <div className={styles.card}>
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.name}>{project.title}</h3>
                  {project.date && (
                    <span className={styles.period}>{project.date}</span>
                  )}
                </div>
                <p className={styles.summary}>{project.description}</p>
                {project.tags && project.tags.length > 0 && (
                  <div className={styles.tech}>
                    {project.tags.map((tag, index) => (
                      <span key={index} className={styles.techTag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )

          if (project.link) {
            return (
              <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {content}
              </a>
            )
          }

          return <div key={project.id}>{content}</div>
        })}
      </div>
    </div>
  )
}

export default Projects
