import React, { useState } from 'react'

interface TasksProps {
  todos: any[]
}

export const Tasks:React.FC<TasksProps> = ({todos}) => {
  

  return(
    <>
      <ul>
        {todos.map(item=>(
          <li>{item}</li>
        ))}
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, ipsum numquam velit dolore doloribus placeat fugit officiis voluptas distinctio? Aliquid, nesciunt sed explicabo sunt consequatur vitae nam ut labore inventore?</p>
    </>
  )
}