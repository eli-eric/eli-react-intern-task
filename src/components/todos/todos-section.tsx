import { useState, useEffect } from 'react'
import { TodoForm } from './todo-form'
import { TodoItem } from './todo-item'
import { ErrorMessage } from '../error-message'
import { Spinner } from '../spinner'
import { todoApi } from '../../api/todoApi'
import type { Todo } from '../../types'

export const TodosSection = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTodos = async () => {
    try {
      setLoading(true)
      const data = await todoApi.fetchTodos()
      setTodos(data)
      setError(null)
    } catch (err) {
      setError('Failed to load todos. Please try again later.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const createTodo = async (todoText: string) => {
    try {
      const newTodo = await todoApi.createTodo(todoText)
      setTodos((prevTodos) => [...prevTodos, newTodo])
      setError(null)
    } catch (err) {
      setError('Failed to create todo. Please try again later.')
      console.error(err)
    }
  }

  // useEffect run once when the component mounts, more like componentDidMount, check the docs
  useEffect(() => {
    fetchTodos()
  }, [])

  const handleCreateTodo = async (todoText: string) => {
    // TODO: Implementace přidání nového úkolu
  }

  const handleDeleteTodo = async (id: number) => {
    // TODO: Implementace mazání úkolu
  }

  const handleToggleTodo = async (todo: Todo) => {
    // TODO: Implementace přepínání stavu úkolu
  }

  return (
    <main>
      {error && (
        <ErrorMessage message={error} onDismiss={() => setError(null)} />
      )}
      <TodoForm handleCreateTodo={handleCreateTodo} />
      <div className="todo-container">
        {loading ? (
          <Spinner />
        ) : (
          <ul>
            {todos.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '20px' }}>
                No todos yet. Add some tasks to get started!
              </p>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={handleDeleteTodo}
                  onToggle={handleToggleTodo}
                />
              ))
            )}
          </ul>
        )}
      </div>
    </main>
  )
}
