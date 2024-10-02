import React from 'react'
import "./Quote.css"
import quote from "./../../../../../Img/quote.png"
const Quote = () => {
  return (
    <div className='quote'>
      <img src={quote} alt="quote" />
      <p>"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers."
       <br /> - <span>Socrates</span>
      </p>
    </div>
  )
}

export default Quote
