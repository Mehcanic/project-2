import React from 'react'
import { Link } from 'react-router-dom'

import '../Reply/ContactButton'
import ContactButton from '../Reply/ContactButton'
import '../../App.css'
import './UserProfile.css'
import '../GeneralStyle/UtilityClasses.css'

const UserProfile = () => {
  const [persons, setPersons] = React.useState(null)
  const [comment, setComment] = React.useState(null)
  
  const getRandomText = async () => {
    const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler&sentences=20")
    const data = await response.json()
    setComment(data)
  }

  const getPersons = async () => {
    const response = await fetch(`https://randomuser.me/api/?nat=EU&results=1`)
    const data = await response.json()
    setPersons(data.results)
  }
  
  React.useEffect(() => {
    getPersons()
    getRandomText()
  }, [])
  
  function getUserData() {
    return persons.map((person) => {
      const registeredDate = [person.registered.date.substr(0, 10)]
      return (
        <div className="user-profile-container">             
          <div className='main-info-container'>
            <div className='left-container flex-r-start'>
              <div className='image-container'>
                <img src={person.picture.large} alt="user" key={person.id} />
              </div>
              <div className='name-container'>
                <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
              </div>                
          </div>
          <div className='right-container'>
            <div className='buttons-container flex-r-center'>
              <Link to="allcomments"><ContactButton /></Link>
            </div>
          </div>
        </div> 

        <div className='details-container'>        
          <div className='info'>
            <h2>Info</h2>
            <div className='info-cell'>
              <p>Street:</p> <p><span>{person.location.street.number} {person.location.street.name}</span></p>
            </div>
            <div className='info-cell'>
              <p>City:</p> <p><span>{person.location.city}</span></p>
            </div>
            <div className='info-cell'>
              <p>State:</p> <p><span>{person.location.state}</span></p>
            </div>
            <div className='info-cell'>
              <p>Postcode:</p> <p><span>{person.location.postcode}</span></p>
            </div>
            <div className='info-cell email-container'>
              <p>E-mail:</p> <p><span>{person.email}</span></p>
            </div>
            <div className='info-cell'>
              <p>Phone:</p> <p><span>{person.phone}</span></p>
            </div>
            <div className='info-cell'>
              <p>Mobile:</p> <p><span>{person.cell}</span></p>
            </div>
            <div className='info-cell'>
              <p>Age:</p> <p><span>{person.dob.age}</span></p>
            </div>
            <div className='info-cell'>
              <p>Nationality:</p> <p><span>{person.nat}</span></p>
            </div>
            <div className='info-cell'>
              <p>Customer since:</p> <p><span>{registeredDate}</span></p>
            </div>
          </div>
        
          <div className='timeline-container'>
            <div>
              <h2>Most recent blog post</h2>
              <p>{comment}</p>
            </div>
          </div>    
        </div>
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

export default UserProfile