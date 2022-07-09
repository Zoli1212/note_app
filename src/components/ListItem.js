import React from 'react'
import { Link } from 'react-router-dom'



const getTime = (date) => {
  if(!date) return 
  return new Date(date).toLocaleDateString()
}
const getTitle = (note) => {


  const title = note.split('\n')[0]
  console.log('title',title)
  if(title.length > 45){

    return title.slice(0, 45)

  }


  return title

}


const getContent = (cont) => {

  let title = getTitle(cont)
  console.log('contenttitle', title, cont)
  let temp = cont.replaceAll('\n', '')
  temp = cont.replaceAll(title, '')

  console.log('content', temp)

  if(temp.length > 45){
    return temp.slice(0, 45)+'...'

  }
  return temp

}

export const ListItem = (props) => {

  console.log(props)
  return (
    <Link to={`/note/${props.id}`}>

    <div className="notes-list-item">
        <h3>{ getTitle(props.body)}</h3>
        <p><span>{getTime(props.updated)}</span>{ getContent(props.body)}</p>
    </div>
    </Link>
  )
}
