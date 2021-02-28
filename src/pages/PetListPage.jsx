import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledBox } from '../components/StyledBox'

export function PetListPage() {
  const [pets, setPets] = useState({})
  const [newPet, setNewPet] = useState('')

  useEffect(async () => {
    const response = await axios.get(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets`
    )
    setPets(response.data)
  }, [])

  async function handleNewPet(event) {
    event.preventDefault()

    const response = await axios.post(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets`,
      {
        name: newPet,
      }
    )
    const newPetsList = response.data
    const newPetList = { ...pets, newPetsList }
    setPets(newPetList)
    setNewPet('')
  }
  return (
    <>
      <h3>Current Pets:</h3>
      <ul className="pets">
        {Object.entries(pets).map(([petCode, petDetails]) => {
          return (
            <li key={petDetails.id}>
              <Link to={`/pets/${petDetails.id}`}>{petDetails.name} </Link>{' '}
            </li>
          )
        })}
        <form onSubmit={handleNewPet}>
          <input
            type="text"
            placeholder="Add A New Pet!"
            value={newPet}
            onChange={function (event) {
              setNewPet(event.target.value)
            }}
          />
        </form>
      </ul>
    </>
  )
}
