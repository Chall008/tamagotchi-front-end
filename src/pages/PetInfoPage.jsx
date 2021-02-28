import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom'
import { StyledBox } from '../components/StyledBox'

export function PetInfoPage() {
  const [petInfo, setPetInfo] = useState({
    id: undefined,
  })

  const history = useHistory()
  const { id } = useParams()

  useEffect(
    // @ts-ignore
    async function () {
      const response = await axios.get(
        `https://coreyhalltamagotchi.herokuapp.com/api/pets/${id}`
      )

      setPetInfo(response.data)
    },
    [id]
  )

  async function playWithPet() {
    const response = await axios.post(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${id}/playtimes`
    )
    const updatePlay = await axios.get(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${id}`
    )
    setPetInfo(updatePlay.data)
  }
  async function feedPet() {
    const response = await axios.post(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${id}/feedings`
    )
    const updatePlay = await axios.get(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${id}`
    )
    setPetInfo(updatePlay.data)
  }
  async function scoldPet(event) {
    const response = await axios.post(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${id}/scoldings`
    )
    const updatePlay = await axios.get(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${id}`
    )
    setPetInfo(updatePlay.data)
  }

  async function deletePet() {
    const response = await axios.delete(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/${id}`
    )
    history.push('/')
  }
  async function goHome() {
    const response = await axios.get(
      `https://coreyhalltamagotchi.herokuapp.com/api/pets/`
    )
    history.push('/')
  }

  return (
    <>
      <StyledBox extraClassName="pet-info">
        <p>Pet Name:{petInfo.name}</p>
        <p>Hunger Level:{petInfo.hungerLevel}</p>
        <p>Happiness Level:{petInfo.happinessLevel}</p>
        <p>Birthday:{petInfo.birthday}</p>
      </StyledBox>

      <div className="pet-buttons">
        <button onClick={playWithPet}>Play</button>
        <button onClick={feedPet}>Feed</button>
        <button onClick={scoldPet}>Scold</button>
        <button onClick={deletePet}>Delete</button>
        <button onClick={goHome}>Home</button>
      </div>
    </>
  )
}
