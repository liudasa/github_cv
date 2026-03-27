import blog from '../data/blog.json'
import Card from '../components/Card'
import styles from './Blog.module.css'

function Blog() {
  return (
    <div className={styles.blog}>
      <h1 className={styles.pageTitle}>Blog</h1>
      <p className={styles.subtitle}>记录学习笔记、技术分享和个人思考</p>
      <div className={styles.cardList}>
        {blog.map((post) => (
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
    </div>
  )
}

export default Blog
