import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url)
.then(response => {

  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  const {id, title, completed} = response.data as Todo
  
  logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID: ${id} 
    Title: ${title} 
    Complited: ${completed}
  `);
}