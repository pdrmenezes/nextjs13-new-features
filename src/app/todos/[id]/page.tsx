import { notFound } from "next/navigation";
import { Todo } from "../../../../types";

type PageProps = {
  params: {
    id: string;
  };
};

const fetchTodo = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { next: { revalidate: 60 } });
  const todo: Todo = await res.json();
  return todo;
};

export default async function TodoDetailsPage({ params: { id } }: PageProps) {
  const todo = await fetchTodo(id);

  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "✅" : "❌"}</p>
      <p className="border-t border-black mt-5 text-right">By: {todo.userId}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  // only caching the first 20 to avoid exceeding api request limits
  const trimmedTodos = todos.splice(0, 20);

  return trimmedTodos.map((todo) => ({
    id: todo.id.toString(),
  }));
}
