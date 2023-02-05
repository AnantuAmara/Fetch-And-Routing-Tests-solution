// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.renderBlogData()
  }

  renderBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogItemData: updatedData, isLoading: false})
  }

  renderBlogItemData = () => {
    const {blogItemData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogItemData

    return (
      <div className="blog-item-data-container">
        <h2 className="heading">{title}</h2>
        <div className="avatar-container">
          <img className="avatar" src={avatarUrl} alt={author} />
          <p className="author">{author}</p>
        </div>
        <img className="image" src={imageUrl} alt={title} />
        <p className="paragraph">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="item-details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
