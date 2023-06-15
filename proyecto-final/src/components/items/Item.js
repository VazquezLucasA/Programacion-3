import React from 'react'

export const Item = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <img src={`${props.img}`}/>
    </div>
  )
}
