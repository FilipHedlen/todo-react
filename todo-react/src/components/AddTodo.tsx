import { ChangeEvent, useState } from "react";

interface IAddTodoProps {
    createTodo: (textFromUser: string) => void;
}

export const AddTodo = ({ createTodo }: IAddTodoProps) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    }

    const handleAdd = () => {
        createTodo(userInput);
        setUserInput("");
    };

    return (
        <> 
          <input type="text" onChange={handleChange} value={userInput} />
          <button onClick={handleAdd}>Spara</button>
        </>
    );
};