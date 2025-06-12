import { useState } from 'react'

export const TodoForm = () => {
  const [todoText, setTodoText] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementace přidání nového úkolu pomoci onCreate
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          name="todo-text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit" disabled={!todoText.trim()}>
          Add
        </button>
      </div>
    </form>
  )
}
