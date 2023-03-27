import React from 'react'
import Title from './Title'
import Description from './Description'
import Image from './Image'
function SimpleCard() {
  return (
    <div className='css'>
      <Image 
      img='./wd.jpeg'
      />
      <div>
      <Title
      name="Watch Dogs"
      />
      <Description
      Description="Watch Dogs is an action-adventure game, played from a third-person view. 
      The player controls hacker Aiden Pearce, who uses his smartphone to control trains and traffic lights,
       infiltrate security systems, jam cellphones, access pedestrians' private information, and empty their bank accounts."
      />
      </div>
    </div>
  )
}

export default SimpleCard