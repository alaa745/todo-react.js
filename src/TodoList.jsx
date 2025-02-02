import defaultIcon from "./assets/defaultIcon.png"
import doneIcon from "./assets/doneIcon.png"
import deleteIcon from "./assets/deleteIcon.png"

function ToDoList({ handleEditClick, isEditClicked, tasks, markAsDone, deleteTask }) {
    return (
        <div className="todos-list-container">
            {tasks.length === 0 && <h3 style={{ textAlign: "center"}}>No tasks to show</h3>}
            {
                tasks.map((task) => (
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