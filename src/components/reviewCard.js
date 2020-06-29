import React from 'react'

const ReviewCard = ({ image, name, location, description }) => {
  return (
    <div>
      <Image filename={image} />
      <h4>{name}</h4>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  )
}

export default ReviewCard
