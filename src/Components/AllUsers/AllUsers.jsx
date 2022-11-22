import React from 'react'
import { Link } from 'react-router-dom'

import Likes from '../Likes/Likes'
import ContactButton from '../Reply/ContactButton'
import './AllUsers.css'
import '../../App.css'


const AllUsers = () => {
  const [persons, setPersons] = React.useState(null)
  const [comment, setComment] = React.useState(null)
  

  const getRandomText = async () => {
    const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler&sentences=3")
    const data = await response.json()
    setComment(data)
  }

  const getPersons = async () => {
    const response = await fetch(`https://randomuser.me/api/?nat=EU&results=100`)
    const data = await response.json()
    setPersons(data.results)
  }

  React.useEffect(() => {
    getPersons()
    getRandomText()
  }, [])
  


  function getUserData() {
    return persons.map((person) => {
      return (
        <div className="card-container">
          <div className='main-info-container'>
            <div className='left-container flex-r-start'>
              <div className='image-container'>
                <img src={person.picture.large} alt="user" key={person.id} />
              </div>
              <div className='name-container'>
                <h2>{person.name.first} {person.name.last}</h2>
                {/* <p className='friends-number'>Firends number</p>
                <p className='friends-pictures'>Friends pictures</p> */}
                <p>E-mail: {person.email}</p>
                <p>Phone: {person.phone}</p>
                <p>Mobile: {person.cell}</p>
              </div>                
          </div>
          <div className='right-container'>
            <div className='buttons-container flex-r-center'>
              {/* <Likes className="likes" /> */}
              <Link to="allcomments"><ContactButton /></Link>
            </div>
          </div>
        </div> 

          {/* <Likes className="likes" />
          <img src={person.picture.large} alt="user" key={person.id} />
          <div className="name-container">
            <p>Title: {person.name.title}</p>
            <p>First name: {person.name.first}</p>
            <p>Surename: {person.name.last}</p>
           
            <ContactButton />
          </div> */}
          
        </div>
      )
    })
  }
  if(!persons) {
      return (
        <>
          <h1>Loading Users data</h1>
        </>
      )
    }
  if(!comment) {
    return (
      <>
        <p>Loading comments</p>
      </>
    )
  }

  return (
    <>
      <>
        {getUserData()}
      </>
    </>
  )
}


export default AllUsers
