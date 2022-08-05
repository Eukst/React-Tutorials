import React from 'react'
import Person from './Person'
function PersonList() {
   const persons = [
       {
         id:1,
         name: 'MJ',
         age: 22,
         skill: 'ROR'
       },
       {
        id:2,
        name: 'ManoJ',
        age: 23,
        skill: 'R'
      },
      {
        id:3,
        name: 'M9J',
        age: 224,
        skill: 'Python'
      }

    ]
    const persomList = persons.map(person => <Person key={person.id} person={person}></Person>)
  return (
    <div>{persomList}</div>
  )
}

export default PersonList