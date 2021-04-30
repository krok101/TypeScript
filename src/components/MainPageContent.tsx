import React, { useRef } from 'react'
import { Tasks } from './Tasks'

export const MainPageContent: React.FC = () => {
  const ref1 = useRef<HTMLInputElement>(null)


  const keyPressHendler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      console.log('add toDo')
      console.log(ref1.current?.value)
      ref1.current!.value = ''
    }
  }

  return (
    <div className="container">
      <input
        id="toDo"
        ref={ref1}
        type="text"
        className="inputField"
        onKeyPress={keyPressHendler}
      />
      <label htmlFor="toDo">Введите текст</label>
      <Tasks todos={[1,2,3,4,5,6,45]}/>
    </div>
  )
}