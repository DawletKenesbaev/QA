import React, { useContext } from 'react'
import { MyContext } from './MyContext'
function MyConsumer() {
    const {value,setValue}=useContext(MyContext)
  return (
    <div>
      <p>{value}</p>
      <button onClick={()=> setValue('hell no')}>Change</button>
    </div>
  )
}

export default MyConsumer
