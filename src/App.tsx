import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {TaskType} from "./Todolist";

function App() {

    let tasks1 =[
        {id: 1, title: "css", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true}
    ]

    let tasks2:Array<TaskType>=[
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: true},
        {id: 3, title: "Jentlments of fortune",isDone: true}
    ]

    return (
        <div className="App">

            <div className='App'>
                <Todolist title="What to learn" tasks={tasks1}/>
                <Todolist title="Movies" tasks={tasks2}/>

            </div>
        </div>
    );
}


export default App;
/*
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/lex-nagorny/todo-task.git
    git push -u origin main*/
