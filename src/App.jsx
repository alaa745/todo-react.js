import logo from "./assets/logo.png"

import './App.css'
import { use, useState } from "react"
import Header from "./Header"
import Nav from "./Nav"
import TaskText from "./TaskText"
import ToDoList from "./TodoList"
let id = 1;

function App() {

  const [isPersonalClicked, setPersonalIsClicked] = useState(true);
  const [isProfClicked, setProfIsClicked] = useState(false);
  const [taskTitle, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditClicked, setEditIsClicked] = useState(false);
  const [taskNameToEdit, setTaskNameToEdit] = useState("");
  const [profTasks, setProfTasks] = useState([]);

  const addTask = () => {
    console.log(taskTitle);

    if (taskTitle.trim() !== "") {
      if (isPersonalClicked) {
        tasks.push({ id: id, name: taskTitle, done: false });
        let newTasks = tasks.map((task) => task);
        setTasks(
          newTasks
        );
        setNewTask("");
      } else {
        addProfTask();
      }
      id++;

    }
    console.log(tasks);

  }

  const addProfTask = () => {
    if (taskTitle.trim() !== "") {
      setProfTasks(
        [...profTasks, { id: id, name: taskTitle, done: false }]
      );
      setNewTask("");
      id++;
    }
  }

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

  return (
    <div className='main-wrapper'>
      <Header logo={logo}></Header>
      <Nav setNewTask={setNewTask} isPersonalClicked={isPersonalClicked} isProfClicked={isProfClicked} setPersonalIsClicked={setPersonalIsClicked} setProfIsClicked={setProfIsClicked}></Nav>
      <TaskText editTask={editTask} isEditClicked={isEditClicked} taskName={taskTitle} setNewTask={setNewTask} addTask={addTask}></TaskText>
      <ToDoList handleEditClick={handleEditClick} isEditClicked={isEditClicked} tasks={isPersonalClicked ? tasks : profTasks} markAsDone={markAsDone} deleteTask={deleteTask}></ToDoList>
    </div>
  )
}

export default App
