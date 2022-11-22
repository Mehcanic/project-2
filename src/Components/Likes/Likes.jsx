import React from 'react'
import '../../App.css'
import './Likes.css'



const Likes = () => {
  const [counter, setCounter] = React.useState(0)
  const [didLikeComment, setDidLikeComment] = React.useState(false)

    const increaseLike = () => {
      if (!didLikeComment) {
        setDidLikeComment(true)
        setCounter(counter + 1)
      }
    }
  
  const decreaseLike = () => {
    if (didLikeComment) {
      setDidLikeComment(false)
      setCounter(counter - 1)
    }
  }


  
  return (
    <div className="likes-button">
      <button onClick={decreaseLike}>-</button>
      <p>{counter}</p>
      <button onClick={increaseLike}>+</button>
    </div>
  )
}

export default Likes