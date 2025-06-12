# ELI REACT INTERN TASK

## 👋 Introduction

Welcome to the ELI React Intern coding task! This project is designed to help you learn React basics by implementing simple features in a pre-built Todo application.

## 🚀 Project Overview

This is a Todo List application with pre-built components and styling. Some basic functionality is already implemented for you, so you can focus on learning the core concepts.

Your task is to implement these three specific features:

1. Adding new todos
2. Deleting todos
3. Toggling todo completion status

## 📋 Setup Instructions

1. **Clone the repository**:

   ```
   git clone https://github.com/YOUR-USERNAME/eli-react-intern-task.git
   cd eli-react-intern-task
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Start the development server**:

   ```
   npm run dev
   ```

## 📝 Task Requirements

You'll only need to modify two files for this task:

- `src/components/todos/todo-form.tsx` - For adding new todos
- `src/components/todos/todos-section.tsx` - For deleting and toggling todos and handle creating new todos

Here's what you need to implement:

### 1. Add New Todo

Find the `handleSubmit` & `handleCreateTodo` function in `src/components/todos/todo-form.tsx` and implement it to:

- Create a new todo using the `todoApi.createTodo()` function
- Clear the input field after submission
- Update the todo list in the UI with the new todo or refetch the todo list

### 2. Delete Todo

Find the `handleDeleteTodo` function in `src/components/todos/todos-section.tsx` and implement it to:

- Delete a todo using the `todoApi.deleteTodo()` function
- Remove the deleted todo from the UI

### 3. Toggle Todo Status

Find the `handleToggleTodo` function in `src/components/todos/todos-section.tsx` and implement it to:

- Toggle a todo's completion status using the `todoApi.toggleTodo()` function
- Update the todo's status in the UI

## 💡 Tips for Implementation

- Use the existing code as a reference for how to call the API and update state
- Make sure to handle loading states and errors appropriately
- Use console.log() to debug if you get stuck
- The application already shows the list of todos - you just need to add the interactivity

## 🔌 API Information

We've provided the API functionality in `src/api/todoApi.ts`. The API includes methods for creating, deleting, and toggling todos:

- `createTodo(todoName: string)`: Create a new todo
- `deleteTodo(id: number)`: Delete a todo by ID
- `toggleTodo({ id, completed }: TodoToggle)`: Toggle todo completion status

You can view the API documentation at:

- [Swagger Documentation](https://eli-workshop.vercel.app/api-docs)

**Note:** The URLs in the Swagger documentation do not exactly match the ones used in this project. The Swagger shows generic endpoints like `/api/todos`, while in our implementation we're using user-specific endpoints `/api/users/eli-intern/todos`. Use the Swagger for understanding the data models and response structures, but refer to the `todoApi.ts` file for the correct endpoints used in this project.

## 📚 Useful Resources

- [React Documentation](https://react.dev/learn)
- [React Hooks API Reference](https://react.dev/reference/react)
- [Using the Effect Hook](https://react.dev/reference/react/useEffect)
- [Using the State Hook](https://react.dev/reference/react/useState)

Good luck! Remember, the goal is to learn - don't be afraid to ask questions if you get stuck.
