import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export function App() {
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

    const respone = await axios.post(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets`,
      {
        name: newPet,
      }
    )
    const newPetsList = respone.data
    const newPetList = { ...pets, newPetsList }
    setPets(newPetList)
    setNewPet('')
  }

  return (
    <>
      <header>
        <h1>TAMAGOTCHI</h1>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Add</Link>
            </li>
            <li>
              <Link to="/1">About</Link>
            </li>
            {/* <li>
              <Link to="/2">Page 2</Link>
            </li> */}
        {/* </ul>
        </nav> */}
      </header>
      <main>
        <h3>Current Pets:</h3>
        <ul className="pets">
          {Object.entries(pets).map(([petCode, petDetails]) => {
            return <li key={petDetails.id}>{petDetails.name}</li>
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
      </main>
      <footer>
        <h6>Created by: Corey Hall</h6>
      </footer>
      <Switch>
        <Route exact path="/">
          {/* <button>Home</button> */}
        </Route>
        <Route exact path="/1">
          Page 1
        </Route>
        <Route exact path="/2">
          Page 2
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </>
  )
}
