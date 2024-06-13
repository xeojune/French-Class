import React from 'react'
import Selector from '../components/Selector/Selector'
import '../styles/GrammarPlan.css'
import NavBar from '../components/NavBar/NavBar'

function GrammarPlan() {
  const grammarConcepts = ['Les Articles Indéfinis', 'Les Articles Définis', 'Les Articles Contractés']  
  const exerciseTypes = ['MCQ', 'Fill in the Blank', 'Translate', 'Rewrite the Phrase']
  const questionNumbers = ['5', '10', '20', '30']
  const studentLevels = ['Beginner', 'Intermediate', 'Advanced']

  return (
    <div className='grammarPlanner'>
      <NavBar/>
      <div className='selector-container-grammar'>
        <Selector items={grammarConcepts} placeholder="Select Grammar Concept"/>
        <Selector items={exerciseTypes} placeholder="Select Exercise Type"/>
        <Selector items={questionNumbers} placeholder="Select Number of Questions"/>
        <Selector items={studentLevels} placeholder="Select Student Level"/>
        <button type='submit' className='generate--button'>Generate</button>
      </div>
    </div>
    
  )
}

export default GrammarPlan