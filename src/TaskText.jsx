import AddBtn from "./AddBtn";

function TaskText({ editTask, isEditClicked, taskName, setNewTask, addTask }) {
    return (
        <div className="text-container">
            <input
                type="text"
                className="text"
                placeholder="What do you need to do?"
                value={taskName}
                onChange={(e) => {
                    setNewTask(e.target.value);
                }} />
            <AddBtn editTask={editTask} isEditClicked={isEditClicked} addTask={addTask}></AddBtn>
        </div>
    );
}

export default TaskText;