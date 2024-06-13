import React from 'react'
import Selector from '../components/Selector/Selector'
import '../styles/LessonPlan.css'
import NavBar from '../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

function LessonPlan() {
  const classTypes = ['Vocabulary', 'Grammar', 'Reading', 'Writing', 'Listening'];
  const planTypes = ['Lesson', 'Question paper'];

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/grammar-plan');
  }

  return (
    <div className='lessonPlanner'>
      <NavBar/>
      <div className='selector-container'>
        <Selector items={planTypes} placeholder="Select Plan Type"/>
        <Selector items={classTypes} placeholder="Select Lesson Type"/>
        <button type='submit' className='next--button' onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default LessonPlan