import React from 'react'

interface PopUpProps {
  message: string
}

const PopUp = (message: PopUpProps) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

export default PopUp