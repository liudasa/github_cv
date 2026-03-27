import education from '../data/education.json'
import experiences from '../data/experiences.json'
import skills from '../data/skills.json'
import awards from '../data/awards.json'
import Tag from '../components/Tag'
import SectionTitle from '../components/SectionTitle'
import styles from './CV.module.css'

function CV() {
  return (
    <div className={styles.cv}>
      <h1 className={styles.pageTitle}>Curriculum Vitae</h1>

      <section className={styles.section}>
        <SectionTitle>Education</SectionTitle>
        <div className={styles.timeline}>
          {education.map((item) => (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <div>
                  <h3 className={styles.itemTitle}>{item.school}</h3>
                  <p className={styles.itemSubtitle}>{item.degree} · {item.major}</p>
                </div>
                <div className={styles.timelineMeta}>
                  <span className={styles.itemDate}>{item.startDate} - {item.endDate}</span>
                  <span className={styles.itemLocation}>{item.location}</span>
                </div>
              </div>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionTitle>Experience</SectionTitle>
        <div className={styles.timeline}>
          {experiences.map((item) => (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <div>
                  <h3 className={styles.itemTitle}>{item.company}</h3>
                  <p className={styles.itemSubtitle}>{item.role}</p>
                </div>
                <span className={styles.itemDate}>{item.startDate} - {item.endDate}</span>
              </div>
              <p className={styles.itemDescription}>{item.description}</p>
              {item.tags && (
                <div className={styles.tags}>
                  {item.tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionTitle>Skills</SectionTitle>
        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.skillCategory}>
              <h4 className={styles.skillCategoryTitle}>{category}</h4>
              <div className={styles.skillTags}>
                {items.map((skill, index) => (
                  <Tag key={index} text={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {awards.length > 0 && (
        <section className={styles.section}>
          <SectionTitle>Awards</SectionTitle>
          <div className={styles.timeline}>
            {awards.map((item) => (
              <div key={item.id} className={styles.timelineItem}>
                <div className={styles.timelineHeader}>
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemSubtitle}>{item.organization}</p>
                  </div>
                  <span className={styles.itemDate}>{item.date}</span>
                </div>
                {item.description && (
                  <p className={styles.itemDescription}>{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default CV
