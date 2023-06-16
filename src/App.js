import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const taskData= [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = React.useState(taskData);

  const setComplete = (id) => (
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
      return task.id === id ? {...task, isComplete:task.isComplete} : task;
    });
    return updatedTasks;
  })
);

  const removeTask = (id) => (
    setTasks (prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== id );
      return updatedTasks;
    })
  );
  

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={tasks} setComplete={setComplete} removeTask={removeTask} /></div>
      </main>
    </div>
  );
};

export default App;
