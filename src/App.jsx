import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom'
import { PetListPage } from './pages/PetListPage'
import { PetInfoPage } from './pages/PetInfoPage'
import { StyledBox } from './components/StyledBox'

export function App() {
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
        <Switch>
          <Route exact path="/">
            <StyledBox>
              <PetListPage />
            </StyledBox>
          </Route>
          <Route path="/pets/:id">
            <PetInfoPage />
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </main>
      <footer>
        <h6>Created by: Corey Hall</h6>
      </footer>
    </>
  )
}
