import defaultIcon from "./assets/defaultIcon.png"
import doneIcon from "./assets/doneIcon.png"
import deleteIcon from "./assets/deleteIcon.png"
import { useContext } from "react";
import { TodoListContext } from "./contexts/TodoListContext";

function ToDoList() {
    const { tasks, setTasks, setNewTask, setProfTasks, profTasks, isPersonalClicked, setTaskNameToEdit, isEditClicked, setEditIsClicked } = useContext(TodoListContext);
    const tasksToShow = isPersonalClicked ? tasks : profTasks;
    const markProfAsDone = (taskId) => {
        let newTask = profTasks.map((task) => task.id === taskId ? { ...task, done: !task.done } : task);

        setProfTasks(newTask);
    }

    const deleteProfTask = (taskId) => {

        let updatedTask = profTasks.filter((task) => task.id !== taskId);
        setProfTasks(updatedTask);
    }



    const markAsDone = (taskId) => {
        console.log(taskId);
        if (isPersonalClicked) {
            let newTask = tasks.map((task) => task.id === taskId ? { ...task, done: !task.done } : task);

            setTasks(newTask);
        } else {
            markProfAsDone(taskId);
        }

    }

    const deleteTask = (taskId) => {
        console.log("delete");

        if (isPersonalClicked) {
            let updatedTask = tasks.filter((task) => task.id !== taskId);

            setTasks(updatedTask);
        } else {
            deleteProfTask(taskId);
        }

    }

    const handleEditClick = (taskName) => {
        setEditIsClicked(true);
        setNewTask(taskName);
        setTaskNameToEdit(taskName);
    }
    return (
        <div className="todos-list-container">
            {tasksToShow.length === 0 && <h3 style={{ textAlign: "center" }}>No tasks to show</h3>}
            {
                tasksToShow.map((task) => (
                    <div key={task.id} className="todo-parant">
                        <div className="todo-container" >
                            <img style={{ cursor: "pointer" }} src={task.done ? doneIcon : defaultIcon} width={20} onClick={() => markAsDone(task.id)} />
                            <h5
                                style={
                                    { color: task.done ? "lightGrey" : "black", textDecoration: task.done && "line-through" }
                                }>
                                {task.name}
                            </h5>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <button className="edit-btn" onClick={() => !isEditClicked && handleEditClick(task.name)}>Edit</button>
                                <img style={{ cursor: "pointer" }} src={deleteIcon} width={15} onClick={() => deleteTask(task.id)} />

                            </div>
                        </div>
                        <div className="spacer"></div>
                    </div>

                ))
            }
        </div>
    );
}

export default ToDoList;