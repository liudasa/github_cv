import projects from '../data/projects.json'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import styles from './Projects.module.css'

function Projects() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.pageTitle}>Projects</h1>
      <div className={styles.cardList}>
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            date={project.date}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
