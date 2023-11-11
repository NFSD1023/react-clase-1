import './article.css'
import PropTypes from 'prop-types'

const Article = ({ title, content }) => {
  return (
    <div className="article">
      <h1>{title}</h1>
      <p>{content.call()}</p>
    </div>
  )
}

Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default Article