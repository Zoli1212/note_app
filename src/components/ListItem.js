import React from 'react'
import { Link } from 'react-router-dom'

export const ListItem = (props) => {

  console.log(props)
  return (
    <Link to={`/note/${props.id}`}>

    <div className="notes-list-item">
        <h3>{ props.body}</h3>
    </div>
    </Link>
  )
}
