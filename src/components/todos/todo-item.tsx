import type { Todo } from '../../types'

type TodoItemProps = {
  todo: Todo
  onDelete: (id: number) => void
  onToggle: (todo: Todo) => void
}

export const TodoItem = ({ todo, onDelete, onToggle }: TodoItemProps) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span>{todo.name}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button className="toggle" onClick={() => onToggle(todo)}>
        {todo.completed ? 'Undo' : 'Completed'}
      </button>
    </li>
  )
}
