import React from 'react';
import { useState } from 'react'

function App() {
  const [liked, setLiked] = useState(false);
  
  const handleClick = () => {
    setLiked(!liked);
  }


  return (
    <div>
      <h1>liked button demo</h1>
      <p>{ liked ? "  ❤️ Liked" : " 🤍 Like" }</p>
      <button onClick={handleClick}>Click to like</button>
    </div>
  )
}

export default App
