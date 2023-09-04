import { Todo } from "../models/Todo";

interface ITodosProps {
    todoList: Todo[];
}

export const Todos = ({ todoList }: ITodosProps) => {
   const lis = todoList.map((todo) => <li>{todo.text}</li>)
   
   return (
     <ul>
        {lis}
     </ul>
    );
};