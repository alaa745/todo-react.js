import React from 'react'
import './App.css'
import { use, useContext, useState } from "react"
import Header from "./Header"
import Nav from "./Nav"
import TaskText from "./TaskText"
import ToDoList from "./TodoList"
import { TodoListContext, TodoListContextProvider } from "./contexts/TodoListContext";
import logo from "./assets/logo.png"


function AppContent() {

    return (
        <div className='main-wrapper'>
            <Header logo={logo}></Header>
            <Nav ></Nav>
            <TaskText ></TaskText>
            <ToDoList ></ToDoList>
        </div>
    )
}

export default AppContent