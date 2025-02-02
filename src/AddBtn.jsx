function AddBtn({ editTask, isEditClicked, addTask }) {
    return (
        <button className="add-btn" onClick={(isEditClicked ? editTask : addTask)}> {isEditClicked ? ("EDIT") : ("ADD")}</button>
    );
}

export default AddBtn;