import type { Todo } from '../../types'

type TodoItemProps = {
  todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span>{todo.name}</span>
      <button>Delete</button>
      <button className="toggle">
        {todo.completed ? 'Undo' : 'Completed'}
      </button>
    </li>
  )
}
