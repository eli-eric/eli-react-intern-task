# ELI REACT INTERN TASK

## 👋 Introduction

Welcome to the ELI React Intern coding task! This project is designed to assess your React skills, particularly your ability to work with APIs, manage state, and implement core functionality in a pre-styled application.

## 🚀 Project Overview

This is a Todo List application with pre-built components and styling. Your task is to **bring the application to life** by implementing the core functionality:

- Fetching todos from the API
- Displaying todos in the list
- Adding new todos
- Deleting todos
- Toggling todo completion status

## 📋 Setup Instructions

1. **Fork the repository**:

   - Visit the GitHub repository page
   - Click the "Fork" button in the upper right corner
   - This creates a copy of the repository in your GitHub account

2. **Clone your forked repository**:

   ```
   git clone https://github.com/YOUR-USERNAME/eli-react-intern-task.git
   cd eli-react-intern-task
   ```

3. **Create a new branch**:

   ```
   git checkout -b "branch-name"
   ```

4. **Install dependencies**:

   ```
   npm install
   ```

5. **Start the development server**:

   ```
   npm run dev
   ```

6. **Make your changes and commit regularly**:
   ```
   git add .
   git commit -m "Descriptive message about your changes"
   git push origin "branch-name"
   ```

## 📝 Task Requirements

Your task is to implement the following features:

### 1. Todo List Display

- Fetch todos from the API when the app loads
- Display todos in the list
- Show loading state while fetching
- Handle any potential errors

### 2. Create New Todo

- Implement the form submission to create a new todo
- Add the new todo to the list
- Handle validation and loading states

### 3. Delete Todo

- Implement the delete functionality
- Update the UI accordingly
- Handle loading and error states

### 4. Toggle Todo Status

- Implement the ability to mark a todo as completed/uncompleted
- Update the UI to reflect the todo status
- Handle loading and error states

### 5. Additional Functionalities (Optional)

You're encouraged to add any additional features that would enhance the application.
Feel free to be creative! These additional features will showcase your ability to go beyond the basic requirements.

## 🔌 API Information

We've provided the API functionality in `src/api/todoApi.ts`. The API includes the following methods:

- `fetchTodos()`: Get all todos
- `createTodo(todoName: string)`: Create a new todo
- `deleteTodo(id: number)`: Delete a todo
- `toggleTodo({ id, completed }: TodoToggle)`: Toggle todo completion status
- `fetchTodo(id: number)`: Get a specific todo by ID

### API Documentation

You can view the API documentation at:

- [Swagger Documentation](https://eli-workshop.vercel.app/api-docs)

**Note:** The URLs in the Swagger documentation do not exactly match the ones used in this project. The Swagger shows generic endpoints like `/api/todos`, while in our implementation we're using user-specific endpoints `/api/users/eli-intern/todos`. Use the Swagger for understanding the data models and response structures, but refer to the `todoApi.ts` file for the correct endpoints used in this project.

## 💡 Implementation Guidelines

- Feel free to use any state management approach you prefer (React's built-in hooks, context, etc.)
- You're welcome to install and use additional libraries if needed
- The project is already pre-styled with CSS, so you can focus entirely on the functionality
- Pay attention to user experience - loading states, error handling, etc.
- Code quality matters! Write clean, maintainable code

## 📚 Useful Resources

- [React Documentation](https://react.dev/learn)
- [React Hooks API Reference](https://react.dev/reference/react)
- [Vite Documentation](https://vitejs.dev/guide/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Query](https://tanstack.com/query/latest/) - A great library for data fetching
- [Zustand](https://github.com/pmndrs/zustand) - A simple state management solution
- [React Router](https://reactrouter.com/en/main) - For routing if you want to add multiple pages

## 🎯 Submission Process

Please follow these steps for your submission:

1. **Fork this repository** to your GitHub account
2. **Create a new branch** with a descriptive name (e.g., `feature/your-name-solution`)
3. **Implement your solution** with regular, meaningful commits that show your progress
4. **Create a Pull Request** to the master branch of the original repository before your interview
5. In the PR description, include:
   - A brief overview of your implementation
   - Any decisions or tradeoffs you made

**Note:** The commit history is important as it shows your development process. Please make regular commits with clear messages as you implement different features.

Good luck! We're excited to see your solution.
