import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom'
import { StyledBox } from '../components/StyledBox'
import format from 'date-fns/format'

export function PetInfoPage() {
  const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`
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
  async function scoldPet() {
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

  if (petInfo.id === undefined) {
    return <div></div>
  }

  return (
    <>
      <StyledBox>
        <p>Pet Name:{petInfo.name}</p>
        <p>Hunger Level:{petInfo.hungerLevel}</p>
        <p>Happiness Level:{petInfo.happinessLevel}</p>
        <p>
          Born:<time>{format(new Date(petInfo.birthday), dateFormat)}</time>
        </p>
        <span className="button" onClick={deletePet}>
          -Delete-
        </span>
        <span className="button" onClick={goHome}>
          -Home-
        </span>
      </StyledBox>

      <div className="pet-buttons">
        <button title="Play" className="play" onClick={playWithPet}>
          Play
        </button>
        <button title="Feed" className="feed" onClick={feedPet}>
          Feed
        </button>
        <button title="Scold" className="scold" onClick={scoldPet}>
          Scold
        </button>
      </div>
    </>
  )
}
