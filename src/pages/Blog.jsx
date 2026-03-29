import blog from '../data/blog.json'
import styles from './Blog.module.css'

function Blog() {
  const sortedPosts = [...blog].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, '-'))
    const dateB = new Date(b.date.replace(/\./g, '-'))
    return dateB - dateA
  })

  return (
    <div className={styles.blog}>
      <h1 className={styles.pageTitle}>Blog</h1>
      <p className={styles.pageDescription}>
        记录学习笔记、技术分享和个人思考
      </p>
      <div className={styles.postList}>
        {sortedPosts.map((post) => (
          <div key={post.id} className={styles.postItem}>
            <div className={styles.postHeader}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span className={styles.postDate}>{post.date}</span>
            </div>
            <p className={styles.postSummary}>{post.description}</p>
            <div className={styles.postTags}>
              {post.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
