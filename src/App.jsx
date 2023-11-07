import { useState } from 'react'

import { NavBar } from './components/NavBar.jsx'
import { Hero } from './components/Hero.jsx'
import { Card } from './components/Card.jsx'

import fetchExperiences from './data.js'

import Katie from "/src/assets/katie-zaferes.png"

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

import './App.scss'

function App() {

  const cardElements = fetchExperiences.map((card) => {
    return <Card
      key={card.id}
      card={card}
    />
  })

  return (
    <>
      <main className="app">
        <NavBar />
        <Hero />
        <section className="card-carousel-container">
          <div className="card-carousel">
            {cardElements}
          </div>
        </section>
      </main>
    </>
  )
}

export default App