import { useContext } from "react";
import { TodoListContext } from "./contexts/TodoListContext";

function AddBtn() {
    const { setTasks, taskTitle, tasks, isPersonalClicked, id, setId, setNewTask, profTasks, setProfTasks, setEditIsClicked, isEditClicked, taskNameToEdit } = useContext(TodoListContext);
    const editTask = () => {
        if (isPersonalClicked) {
            setTasks(tasks.map((task) => task.name === taskNameToEdit ? { ...task, name: taskTitle } : task));
            console.log(tasks);
            setEditIsClicked(false);
            setNewTask("");
        } else {
            editProfTask();
        }
    }

    const editProfTask = () => {
        setProfTasks(profTasks.map((task) => task.name === taskNameToEdit ? { ...task, name: taskTitle } : task));
        console.log(tasks);
        setEditIsClicked(false);
        setNewTask("");
    }
    const addTask = () => {
        console.log(taskTitle);

        if (taskTitle.trim() !== "") {
            if (isPersonalClicked) {

                setTasks([
                    ...tasks, { id: id, name: taskTitle, done: false }
                ])
                setNewTask("");
            } else {
                addProfTask();
            }
            setId((prevId) => prevId + 1);
        }
        console.log(tasks);

    }

    const addProfTask = () => {
        if (taskTitle.trim() !== "") {
            setProfTasks(
                [...profTasks, { id: id, name: taskTitle, done: false }]
            );
            setNewTask("");
            setId((prevId) => prevId + 1);
        }
    }
    return (
        <button className="add-btn" onClick={(isEditClicked ? editTask : addTask)}> {isEditClicked ? ("EDIT") : ("ADD")}</button>
    );
}

export default AddBtn;