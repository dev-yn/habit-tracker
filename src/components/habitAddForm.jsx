import React, { memo, useRef } from 'react'

const HabitAddForm = memo(props => {
  const formRef = useRef()
  const inputRef = useRef()

  const onSubmit = event => {
    event.preventDefault()
    const habitName = inputRef.current.value
    habitName && props.onAdd(habitName)
    formRef.current.reset()
  }

  console.log(`habitAddForm`)
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className="add-input"
        type="text"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  )
})

export default HabitAddForm
