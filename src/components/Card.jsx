import Tag from './Tag'
import styles from './Card.module.css'

function Card({ title, description, date, tags, link }) {
  const content = (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {date && <span className={styles.date}>{date}</span>}
      </div>
      <p className={styles.description}>{description}</p>
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      )}
    </div>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        {content}
      </a>
    )
  }

  return content
}

export default Card
