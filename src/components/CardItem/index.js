import './index.css'

// Write your code here.
const CardItem = props => {
  const {cardContents} = props
  const {title, description, imgUrl, className} = cardContents

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title"> {title} </h1>
      <p className="card-description"> {description} </p>
      <div className="img-container">
        <img src={imgUrl} className="card-image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem

//{`${className} card-item`}>
