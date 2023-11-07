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
        <section className="card-carousel">
          {cardElements}
        </section>
      </main>
    </>
  )
}

export default App

{/* 

<Card
      title={exp.title} 
      description={exp.description} 
      price={exp.price} 
      coverImg={exp.coverImg} 
      rating={exp.stats.rating} 
      reviewCount={exp.stats.reviewCount} 
      location={exp.location} 
    />

<Card 
  img={Katie} 
  title="Life Lessons with Katie Zaferes" 
  rating={5.0}
  reviewCount={6}
  location="USA"
  price={136}
/>
<Card 
  img={Katie} 
  title="Learn wedding photography" 
  rating={5.0}
  reviewCount={30}
  location="USA"
  price={125}
/> */}