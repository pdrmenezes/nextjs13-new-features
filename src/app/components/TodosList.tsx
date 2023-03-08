import Link from "next/link";
import { Todo } from "../../../types";

const fetchTodos = async () => {
  // random timeout between 1 and 5 seconds to test the Suspense api on the Homepage
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/", { next: { revalidate: 60 } });
  const todos: Todo[] = await res.json();
  return todos;
};

export default async function TodosList() {
  const todos = await fetchTodos();
  return (
    <div>
      <h1 className="font-bold">Todos List</h1>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="my-2 border-2 border-sky-800 rounded-md text-center text-sky-800 hover:bg-sky-800 hover:text-white transition-all duration-300"
        >
          <Link href={`/todos/${todo.id}`}>Todo {todo.id}</Link>
        </div>
      ))}
    </div>
  );
}
