import React from 'react'
import "./ContentTable.css"
import Prof1 from "../../../assets/prof1.png"
import Prof2 from "../../../assets/prof2.png"

function ContentTable() {
  
  const contents = [
    {
        image: Prof1,
        name: 'Les Articles Definis',
        date: '05-may-2024',
        details: 'MCQs',
        numbers: '10',
        edit: ''
    },
    {
        image: Prof2,
        name: 'Les Articles Indefinis',
        date: '07-may-2024',
        details: 'Fill in the Blank',
        numbers: '10',
        edit: '' 
    },
    {
        image: Prof2,
        name: 'Les Articles Indefinis',
        date: '07-may-2024',
        details: 'Fill in the Blank',
        numbers: '10',
        edit: '' 
    },
    {
        image: Prof1,
        name: 'Les Articles Definis',
        date: '05-may-2024',
        details: 'MCQs',
        numbers: '10',
        edit: ''
    },
  ];
  return (
    <div className='table--list'>
        <div className="table--header">
            <h2>Lessons</h2>
            <select>
                <option value='grammar'>Grammar</option>
                <option value='vocab'>Vocabulary</option>
            </select>
        </div>

        <div className='table--body'>
            <div className='body--title'>
                <h3>Lesson Name</h3>
                <h3>Date Published</h3>
                <h3>Question Types</h3>
                <h3>Numbers</h3>
                <h3>Edit</h3>
            </div>
        </div>

        
        <div className="table--container">
            {contents.map((content) => (
                <div className='list'>
                    <div className="table--detail">
                        <img src={content.image} alt={content.name}/>
                        <h2>{content.name}</h2>
                    </div>
                    <span>{content.date}</span>
                    <span>{content.details}</span>
                    <span>{content.numbers} Questions</span>
                    <span>{content.edit}</span>
                </div>

            ))}
        </div>
        
    </div>
  )
}

export default ContentTable