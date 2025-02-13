import { useState, createContext } from "react";
export const TodoListContext = createContext();

export const TodoListContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [profTasks, setProfTasks] = useState([]);
    const [taskTitle, setNewTask] = useState("");
    const [isPersonalClicked, setPersonalIsClicked] = useState(true);
    const [isProfClicked, setProfIsClicked] = useState(false);
    const [taskNameToEdit, setTaskNameToEdit] = useState("");
    const [isEditClicked, setEditIsClicked] = useState(false);

    const [id, setId] = useState(1);

    return (
        <TodoListContext.Provider value={{ tasks, setTasks, isProfClicked , setProfIsClicked, taskTitle, setNewTask, id, setId, profTasks, setProfTasks, isPersonalClicked, setPersonalIsClicked, taskNameToEdit, setTaskNameToEdit, isEditClicked, setEditIsClicked }}>
            {children}
        </TodoListContext.Provider>
    );
}


