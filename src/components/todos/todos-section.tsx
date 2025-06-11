import { TodoForm } from './todo-form'
import { TodoItem } from './todo-item'
import { ErrorMessage } from '../error-message'

export const TodosSection = () => {
  const isError = false // Replace with actual error state
  return (
    <main>
      {isError && <ErrorMessage message={'Some Error'} />}
      <TodoForm />
      <div className="todo-container">
        <ul>
          <TodoItem
            todo={{
              id: 1,
              name: 'Sample Todo',
              completed: false,
            }}
          />
          <TodoItem
            todo={{
              id: 2,
              name: 'Sample Todo 2',
              completed: true,
            }}
          />
        </ul>
      </div>
    </main>
  )
}
