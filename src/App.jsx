import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export function App() {
  const [pets, setPets] = useState({})

  useEffect(async () => {
    const response = await axios.get(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets`
    )
    setPets(response.data)
  }, [])

  return (
    <>
      <header>
        <h1>TAMAGOTCHI</h1>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/1">Page 1</Link>
            </li>
            <li>
              <Link to="/2">Page 2</Link>
            </li>
          </ul>
        </nav> */}
      </header>
      <main className="pixel-borders pixel-borders--custom">
        <h3>Current Pets:</h3>
        <ul className="pets">
          {Object.entries(pets).map(([petCode, petDetails]) => {
            return <li key={petDetails.id}>{petDetails.name}</li>
          })}
        </ul>
      </main>
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
