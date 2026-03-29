import education from '../data/education.json'
import experiences from '../data/experiences.json'
import skills from '../data/skills.json'
import awards from '../data/awards.json'
import styles from './CV.module.css'

function CV() {
  const skillEntries = Object.entries(skills)

  return (
    <div className={styles.cv}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>教育背景</h2>
        <div className={styles.list}>
          {education.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <div className={styles.itemTitle}>
                  <span className={styles.name}>{item.degree}</span>
                </div>
                <span className={styles.period}>{item.startDate} - {item.endDate}</span>
              </div>
              <div className={styles.itemContent}>
                <p className={styles.infoLine}>
                  <span>{item.school}</span>
                  {item.major && <span> · {item.major}</span>}
                </p>
                {item.description && (
                  <p className={styles.infoLine}>{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>工作经历</h2>
        <div className={styles.list}>
          {experiences.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemHeader}>
                <div className={styles.itemTitle}>
                  <span className={styles.name}>{item.company}</span>
                </div>
                <span className={styles.period}>{item.startDate} - {item.endDate}</span>
              </div>
              <div className={styles.itemContent}>
                <p className={styles.infoLine}>{item.role}</p>
                {item.description && (
                  <p className={styles.description}>{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {awards.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>获奖&荣誉</h2>
          <div className={styles.awardList}>
            {awards.map((item) => (
              <div key={item.id} className={styles.awardItem}>
                <span className={styles.awardTitle}>{item.title}</span>
                <span className={styles.awardLevel}>{item.organization}</span>
                <span className={styles.awardDate}>{item.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {skillEntries.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>技能</h2>
          <div className={styles.skillsList}>
            {skillEntries.map(([category, items]) => (
              <div key={category} className={styles.skillItem}>
                <span className={styles.skillCategory}>{category}</span>
                <span className={styles.skillItems}>{items.join('、')}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default CV
