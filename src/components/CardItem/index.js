import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imageUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img className="card-image" src={imageUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
