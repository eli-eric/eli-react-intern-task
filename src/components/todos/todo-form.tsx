import { useState } from 'react'

type TodoFormProps = {
  handleCreateTodo: (todoText: string) => void
}
export const TodoForm = ({ handleCreateTodo }: TodoFormProps) => {
  const [todoText, setTodoText] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementace přidání nového úkolu pomoci handleCreateTodo
    handleCreateTodo('Sample Todo Text')
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
