import profile from '../data/profile.json'
import news from '../data/news.json'
import blog from '../data/blog.json'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import styles from './Home.module.css'

function Home() {
  const recentBlogs = blog.slice(0, 2)

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <p className={styles.greeting}>{profile.greeting}</p>
        <h1 className={styles.name}>
          I'm <span className={styles.highlight}>{profile.name}</span>.
        </h1>
        <p className={styles.motto}>{profile.motto}</p>
        <p className={styles.intro}>{profile.introEn}</p>
        <p className={styles.introZh}>{profile.introZh}</p>
        <div className={styles.links}>
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              GitHub ↗
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              LinkedIn ↗
            </a>
          )}
          {profile.email && (
            <a href={`mailto:${profile.email}`} className={styles.socialLink}>
              Email ↗
            </a>
          )}
        </div>
      </section>

      <section className={styles.section}>
        <SectionTitle>News</SectionTitle>
        <div className={styles.newsList}>
          {news.map((item) => (
            <div key={item.id} className={styles.newsItem}>
              <span className={styles.newsDate}>{item.date}</span>
              <span className={styles.newsContent}>{item.content}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionTitle>Recent Posts</SectionTitle>
        <div className={styles.cardList}>
          {recentBlogs.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              link={post.link}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
