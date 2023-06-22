import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';


const App = () => {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://127.0.0.1:5000/tasks').then((resp) => {
      // console.log(resp.data);
      const newTaskData = resp.data.map((task) => {
        return {
          id: task.id,
          title: task.title,
          isComplete: task.is_complete
        };
      });
      setTasks(newTaskData);
    });
  }, []);

  // const setComplete = (id) => {
  //   axios.patch(`http://127.0.0.1:5000/tasks/${id}/mark_complete`).then(() => {
  //     setTasks(prevTasks => {
  //       const updatedTasks = prevTasks.map(task => {
  //       return task.id === id ? {...task, isComplete: !task.isComplete} : task;
  //       });
  //     return updatedTasks;
  //     });
  //   });
  // };

  const toggleComplete = (id) => {
    console.log("id", id)
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
        let routes = 'mark_complete';
        
        if (!task.isComplete) {
          routes = 'mark_incomplete';
        }
          
        axios.patch(`http://127.0.0.1:5000/tasks/${id}/${routes}`)
          .then(() => {
            setTasks(updatedTasks);
          })
          .catch((err) => console.log(err));
      }
      return task;
    });
  };
  


  const removeTask = (id) => {
    axios.delete(`http://127.0.0.1:5000/tasks/${id}`).then(() => {
      setTasks (prevTasks => {
        const updatedTasks = prevTasks.filter(task => task.id !== id );
        return updatedTasks;
      });
    });
  };
  
  // const addTask = (newTaskData) => {
  //   axios.post(`http://localhost:5000/tasks`, newTaskData).then((resp)=>{
  //     const newTasks = [...tasks];
  //   })
  // }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={tasks} setComplete={toggleComplete} removeTask={removeTask} /></div>
      </main>
    </div>
  );
};

export default App;
