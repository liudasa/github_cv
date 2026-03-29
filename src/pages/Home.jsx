import profile from '../data/profile.json'
import blog from '../data/blog.json'
import news from '../data/news.json'
import styles from './Home.module.css'

function Home() {
  const latestPosts = blog.slice(0, 2)
  const latestNews = news.slice(0, 4)

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <p className={styles.greeting}>{profile.greeting}</p>
        <h1 className={styles.name}>{profile.name}</h1>
        {profile.motto && <p className={styles.slogan}>{profile.motto}</p>}
        {profile.introEn && <p className={styles.bio}>{profile.introEn}</p>}
        {profile.introZh && (
          <p className={styles.bioZh}>{profile.introZh}</p>
        )}
      </section>

      {latestNews.length > 0 && (
        <section className={styles.newsSection}>
          <h2 className={styles.sectionTitle}>News</h2>
          <div className={styles.newsList}>
            {latestNews.map((item) => (
              <div key={item.id} className={styles.newsItem}>
                <span className={styles.newsDate}>{item.date}</span>
                <span className={styles.newsContent}>{item.content}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Latest Blog</h2>
        </div>
        <div className={styles.blogList}>
          {latestPosts.map((post) => (
            <div key={post.id} className={styles.blogItem}>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <p className={styles.blogSummary}>{post.description}</p>
              <div className={styles.blogMeta}>
                <span className={styles.blogDate}>{post.date}</span>
                <div className={styles.blogTags}>
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className={styles.blogTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Built with React + Vite
        </p>
      </footer>
    </div>
  )
}

export default Home
