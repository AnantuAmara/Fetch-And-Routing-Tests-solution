// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData
  return (
    <Link to={`/blogs/${id}`}>
      <div className="item-container">
        <img className="images" src={imageUrl} alt={`item${id}`} />
        <div className="item-content-container">
          <p className="paragraph">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img className="avatar" src={avatarUrl} alt={`item${id}`} />
            <p className="paragraph">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
