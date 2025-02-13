import { useContext } from "react";
import AddBtn from "./AddBtn";
import { TodoListContext } from "./contexts/TodoListContext";

function TaskText() {
    const { taskTitle, setNewTask, isEditClicked } = useContext(TodoListContext);

    return (
        <div className="text-container">
            <input
                type="text"
                className="text"
                placeholder="What do you need to do?"
                value={taskTitle}
                onChange={(e) => {
                    setNewTask(e.target.value);
                }} />
            <AddBtn  ></AddBtn>
        </div>
    );
}

export default TaskText;