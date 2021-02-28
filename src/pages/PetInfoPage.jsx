import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom'

export function PetInfoPage() {
  const [petInfo, setPetInfo] = useState({
    id: '',
  })

  const history = useHistory()
  const params = useParams()

  useEffect(
    async function () {
      const response = await axios.get(
        `https://coreyhalltamagotchi.herokuapp.com/api/pets/${params.id}`
      )

      setPetInfo(response.data)
    },
    [params.id]
  )

  async function playWithPet() {
    const respons = await axios.post(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${params.id}/playtimes`
    )
  }
  async function feedPet() {
    const respons = await axios.post(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${params.id}/feedings`
    )
  }
  async function scoldPet() {
    const respons = await axios.post(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${params.id}/scoldings`
    )
  }

  async function deletePet() {
    const response = await axios.delete(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${params.id}`
    )
    history.push('/')
  }

  return (
    <div className="pet-info">
      <p>{petInfo.name}</p>
      <p>{petInfo.birthday}</p>
      <p>{petInfo.hungerLevel}</p>
      <p>{petInfo.happinessLevel}</p>
      <button onClick={playWithPet}>Play</button>
      <button onClick={feedPet}>Feed</button>
      <button onClick={scoldPet}>Scold</button>
      <button onClick={deletePet}>Delete</button>
      <button>Home</button>
    </div>
  )
}
