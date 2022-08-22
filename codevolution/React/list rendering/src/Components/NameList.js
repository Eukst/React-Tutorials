import React from 'react'

function NameList() {
    const names = ['bruce','tony','diana']
    const nameList =names.map(name_ => <h2>{name_}</h2>)
    return (<div> {nameList} </div>
  )
}

export default NameList