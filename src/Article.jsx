import './article.css'

const Article = ({ title, content }) => {
  return (
    <div className="article">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Article