import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { ListItem } from '../components/ListItem'
import { AddButton } from '../components/AddButton'

export const NotesPage = (props) => {
  let [ notes, setNotes] = useState([])

  useEffect(() => {

    (async () => {
      const data = await getNotes();
      console.log(data)
      setNotes(data.data)
   })();



  }, [])

  let getNotes = async () => {

    return await axios.get('http://localhost:5000/notes')

  }



  return (
    <div className='notes'>
      <div className="notes-header">
        <h2 className="notes-title">&#9782;Notes</h2>
        <p className="notes-count">{props.notes.length}</p>
        </div>
        <div className="notes-list">

        {
           notes.map((note) => <ListItem key={note.id} {...note} />)

        }
        </div>
        <AddButton />


    </div>
  )
}
