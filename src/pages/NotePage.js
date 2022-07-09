import React, {useState, useEffect} from 'react'
// import notes from '../assets/data'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


import {
  Link,
  matchPath,
  useLocation,
  useParams
} from "react-router-dom";

export const NotePage = (props) => {

  const location = useLocation()

  const navigate = useNavigate()
  const { id } = useParams()
  const [ note, setNote] = useState(null)

 

  useEffect(() => {
    
    let getNotes = async () => {

      if(id==='new') return 
  
      return await axios.get(`http://localhost:5000/notes/${id}`)
  
    }
    (async () => {
      const data = await getNotes();
      console.log(data)
      setNote(data.data)
   })();



  }, [id])


  let createNote = async () => {
    let newNote = {...note, created: new Date()}
    console.log(newNote)
    await axios.post(`http://localhost:5000/notes/`, newNote)
  }
  let updateNote = async () => {
    let newNote = {...note, updated: new Date()}
    console.log(newNote)
    await axios.put(`http://localhost:5000/notes/${id}`, newNote)
  }

  let deleteNote = async () => {
    await axios.delete(`http://localhost:5000/notes/${id}`)

    navigate('/')
  }

  let handleSubmit = () => {

    if(id !== 'new' && !note.body){
      deleteNote()

    }else if(id !=='new'){

      updateNote()
    }else if(id === 'new' && note){
      createNote()
    }

    navigate('/')

  }


 
  // let reNote = notes.find(note => note.id === Number(id))

  return (
    <div className="note">
      <div className="note-header">
        <h3>

        <Link to={'/'}><ArrowLeft onClick={handleSubmit}/></Link> 
        </h3>
        {
          id !== 'new' ? (<button onClick={deleteNote}>Delete</button>): <button onClick={handleSubmit}>Done</button>
        }

      
      </div>
      <textarea onChange={(e) => setNote({...note, body: e.target.value})} value={note?.body} name="" id="" cols="30" rows="10">

      </textarea>
      
      </div>
  )
}
